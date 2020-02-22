import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useInput } from "../../hooks/useInput";
import { useHasError } from "../../hooks/useHasError"
import { FormTextInput, FormLabel, FormCopyright, FormButton, FormFieldErrors } from "../../components/FormElements"

export default function ForgotPassword(props) {
  const [email, emailProps] = useInput();
  const { errors } = props

  const reset = (e) => {
    e.preventDefault();
    Inertia.post('/password/email', {
      email,
    });
  }

  return (
    <div className="w-full max-w-xs mx-auto md:mt-32">
      {props.flash.status && <div class="flex items-center bg-teal-100 text-teal-500 mb-4 border border-teal-500 text-sm font-bold px-4 py-3" role="alert">
        <p>{props.flash.status}</p>
      </div>}
      <form onSubmit={reset} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div className="mb-6">
          <FormLabel htmlFor="email">Email: </FormLabel>
          <FormTextInput {...emailProps} hasError={useHasError(errors, "email")} type="email" id="email" />
          <FormFieldErrors field="email" errors={errors} />
        </div>
        <div className="flex items-center justify-between">
          <FormButton className="w-full" type="submit" value="Send Password Reset Link" />
        </div>
      </form>
      <div className="mt-4">
        <FormCopyright />
      </div>
    </div>
  )
}