import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useInput } from "../../hooks/useInput";
import { useHasError } from "../../hooks/useHasError";
import ErrorList from "../../components/ErrorList";

export default function ResetPassword(props) {
  const [email, emailProps] = useInput(props.email);
  const [password, passwordProps] = useInput();
  const [password_confirmation, password_confirmationProps] = useInput();
  const { errors } = props

  const login = (e) => {
    e.preventDefault();
    Inertia.post('/password/reset', {
      token: props.token,
      email,
      password,
      password_confirmation,
    });
  }

  return (
    <div className="container mx-auto">
      <h1>Login</h1>
      <form onSubmit={login}>
        <div className="flex flex-col">
          <input disabled type="hidden" value={props.token} />
          <div>
            <label htmlFor="email">Email: </label>
            <input disabled {...emailProps} className={`border ${useHasError(errors, "email") ? 'border-red-500' : ''}`} type="email" id="email" />
            {useHasError(errors, "email") && <ErrorList errors={errors['email']} />}
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input {...passwordProps} className={`border ${useHasError(errors, "password") ? 'border-red-500' : ''}`} type="password" id="password" />
            {useHasError(errors, "password") && <ErrorList errors={errors['password']} />}
          </div>
          <div>
            <label htmlFor="password_confirmation">Confirm Password: </label>
            <input {...password_confirmationProps} className={`border ${useHasError(errors, "password_confirmation") && 'border-red-500'}`} type="password" id="password_confirmation" />
            {useHasError(errors, "password_confirmation") && <ErrorList errors={errors['password_confirmation']} />}
          </div>
          <input type="submit" value="Reset Password" />
        </div>
      </form>
    </div>
  )
}