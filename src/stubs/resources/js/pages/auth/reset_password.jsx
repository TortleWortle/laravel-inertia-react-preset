import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useInput } from "../../hooks/useInput";
import { useHasError } from "../../hooks/useHasError";
import { FormTextInput, FormLabel, FormCopyright, FormButton, FormFieldErrors } from "../../components/FormElements"

export default function ResetPassword(props) {
  const [email, emailProps] = useInput(props.email);
  const [password, passwordProps] = useInput();
  const [password_confirmation, password_confirmationProps] = useInput();
  const { errors } = props

  const reset = (e) => {
    e.preventDefault();
    Inertia.post('/password/reset', {
      token: props.token,
      email,
      password,
      password_confirmation,
    });
  }

  return (
    <div className="w-full max-w-xs mx-auto md:mt-32">
      <form onSubmit={reset} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
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
            <FormButton type="submit" value="Reset Password" className="w-full" />
        </div>
      </form>
      <div className="mt-4">
        <FormCopyright/>
      </div>
    </div>
  )
}