import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useInput } from "../../hooks/useInput";
import { useHasError } from "../../hooks/useHasError";
import ErrorList from "../../components/ErrorList";

export default function ForgotPassword(props) {
  const [email, emailProps] = useInput();
  const {errors} = props
  
  const login = (e) => {
    e.preventDefault();
    Inertia.post('/password/email', {
      email,
    });
  }

  return (
    <div className="container mx-auto">
      <h1>Login</h1>
      {props.flash.status && <div className="rounded p-4 bg-green-300">{props.flash.status}</div>}
      <form onSubmit={login}>
        <div className="flex flex-col">
          <div>
            <label htmlFor="email">Email: </label>
            <input {...emailProps} className={`border ${useHasError(errors, "email")  ? 'border-red-500' : ''}`} type="email" id="email"/>
            {useHasError(errors, "email") && <ErrorList errors={errors['email']}/>}
          </div>
          <input type="submit" value="Send Email"/>
        </div>
      </form>
    </div>
  )
}