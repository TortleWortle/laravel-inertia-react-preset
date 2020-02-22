import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useInput } from "../../hooks/useInput";
import { useHasError } from "../../hooks/useHasError";
import { FormTextInput, FormCopyright, FormLabel, FormButton, FormLink, FormFieldErrors } from "../../components/FormElements"

export default function Login(props) {
  const [email, emailProps] = useInput();
  const [password, passwordProps] = useInput();
  const { errors } = props

  const login = (e) => {
    e.preventDefault();
    Inertia.post('/login', {
      email,
      password,
    });
  }

  return (
    <div className="w-full max-w-xs mx-auto md:mt-32">
      <form onSubmit={login} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div className="mb-4">
          <FormLabel htmlFor="email">Email: </FormLabel>
          <FormTextInput {...emailProps} hasError={useHasError(errors, "email")} type="email" id="email" />
          <FormFieldErrors field="email" errors={errors}/>
        </div>
        <div className="mb-6">
          <FormLabel htmlFor="password">Password: </FormLabel>
          <FormTextInput {...passwordProps} hasError={useHasError(errors, "password")} type="password" id="password" />
          <FormFieldErrors field="password" errors={errors}/>
        </div>
        <div className="flex items-center justify-between">
          <FormButton type="submit" value="Sign In" />
          <FormLink href="/password/reset">
            Forgot Password?
          </FormLink>
        </div>
      </form>
      <div className="mt-4">
        <FormCopyright />
      </div>
    </div>
  )
}