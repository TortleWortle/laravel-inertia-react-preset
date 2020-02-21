import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useInput } from "../../hooks/useInput";
import { useHasError } from "../../hooks/useHasError";
import ErrorList from "../../components/ErrorList";

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
    <div className="container mx-auto">
      <h1>Login</h1>
      <form onSubmit={login}>
        <div className="flex flex-col">
          <div>
            <label htmlFor="email">Email: </label>
            <input {...emailProps} className={`border ${useHasError(errors, "email") ? 'border-red-500' : ''}`} type="email" id="email" />
            {useHasError(errors, "email") && <ErrorList errors={errors['email']} />}
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input {...passwordProps} className={`border ${useHasError(errors, "password") ? 'border-red-500' : ''}`} type="password" id="password" />
            {useHasError(errors, "password") && <ErrorList errors={errors['password']} />}
          </div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  )
}