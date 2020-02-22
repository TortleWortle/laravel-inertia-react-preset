import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useInput } from "../../hooks/useInput";
import { useHasError } from "../../hooks/useHasError";
import ErrorList from "../../components/ErrorList";
import { FormTextInput, FormCopyright, FormLabel, FormButton, FormLink, FormFieldErrors } from "../../components/FormElements"

export default function Register(props) {
  const [name, nameProps] = useInput();
  const [email, emailProps] = useInput();
  const [password, passwordProps] = useInput();
  const [password_confirmation, password_confirmationProps] = useInput();
  const { errors } = props

  const register = (e) => {
    e.preventDefault();
    Inertia.post('/register', {
      name,
      email,
      password,
      password_confirmation
    });
  }

  return (
    <div className="w-full max-w-xs mx-auto md:mt-32">
      <form onSubmit={register} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div className="mb-4">
            <FormLabel htmlFor="name">Name: </FormLabel>
            <FormTextInput {...nameProps} hasError={useHasError(errors, "name")} type="text" id="name" />
            <FormFieldErrors field="name" errors={errors}/>
        </div>
        <div className="mb-4">
          <FormLabel htmlFor="email">Email: </FormLabel>
          <FormTextInput {...emailProps} hasError={useHasError(errors, "email")} type="email" id="email" />
          <FormFieldErrors field="email" errors={errors}/>
        </div>
        <div className="mb-4">
          <FormLabel htmlFor="password">Password: </FormLabel>
          <FormTextInput {...passwordProps} hasError={useHasError(errors, "password")} type="password" id="password" />
          <FormFieldErrors field="password" errors={errors}/>
        </div>
        <div className="mb-6">
          <FormLabel htmlFor="password_confirmation">Password Confirmation: </FormLabel>
          <FormTextInput {...password_confirmationProps} hasError={useHasError(errors, "password_confirmation")} type="password" id="password_confirmation" />
          <FormFieldErrors field="password_confirmation" errors={errors}/>
        </div>
        <div className="flex items-center justify-between">
            <FormButton type="submit" value="Register" />
            <FormLink href="/login">
              Login Instead
            </FormLink>
        </div>
      </form>
      <div className="mt-4">
        <FormCopyright/>
      </div>
    </div>
  )
}