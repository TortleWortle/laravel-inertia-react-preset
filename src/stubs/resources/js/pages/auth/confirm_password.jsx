import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useInput } from "../../hooks/useInput";
import { useHasError } from "../../hooks/useHasError";
import ErrorList from "../../components/ErrorList";

export default function ConfirmPassword(props) {
  const [password, passwordProps] = useInput();
  const {errors} = props
  
  const login = (e) => {
    e.preventDefault();
    Inertia.post('/password/confirm', {
      password,
    });
  }

  return (
    <div className="container mx-auto">
      <h1>Login</h1>
      {props.flash.status && <div className="rounded p-4 bg-green-300">{props.flash.status}</div>}
      <form onSubmit={login}>
        <div className="flex flex-col">
        <div>
            <label htmlFor="password">Password: </label>
            <input {...passwordProps} className={`border ${useHasError(errors, "password") ? 'border-red-500' : ''}`} type="password" id="password"/>
            {useHasError(errors, "password") && <ErrorList errors={errors['password']}/>}
          </div>
          <input type="submit" value="Confirm Password"/>
        </div>
      </form>
    </div>
  )
}