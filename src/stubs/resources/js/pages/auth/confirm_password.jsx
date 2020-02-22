import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useInput } from "../../hooks/useInput";
import { useHasError } from "../../hooks/useHasError"
import { FormTextInput, FormLabel, FormCopyright, FormButton, FormFieldErrors } from "../../components/FormElements"

export default function ConfirmPassword(props) {
  const [password, passwordProps] = useInput();
  const { errors } = props

  const confirm = (e) => {
    e.preventDefault();
    Inertia.post('/password/confirm', {
      password,
    });
  }

  return (
    <div className="w-full max-w-xs mx-auto md:mt-32">
      <form onSubmit={confirm} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div className="mb-6">
          <FormLabel htmlFor="password">Password: </FormLabel>
          <FormTextInput {...passwordProps} hasError={useHasError(errors, "password")} type="password" id="password" />
          <FormFieldErrors field="password" errors={errors} />
        </div>
        <div className="flex items-center justify-between">
          <FormButton className="w-full" type="submit" value="Confirm Password" />
        </div>
      </form>
      <div className="mt-4">
        <FormCopyright />
      </div>
    </div>
  )
}