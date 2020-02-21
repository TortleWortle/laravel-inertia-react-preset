import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useInput } from "../../hooks/useInput";
import { useHasError } from "../../hooks/useHasError";
import ErrorList from "../../components/ErrorList";

export default function Register(props) {
  const [name, nameProps] = useInput();
  const [email, emailProps] = useInput();
  const [password, passwordProps] = useInput();
  const [password_confirmation, password_confirmationProps] = useInput();
  const {errors} = props
  
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
    <div className="container mx-auto">
      <h1>Register</h1>
      <form onSubmit={register}>
        <div className="flex flex-col">
          <div>
            <label htmlFor="name">Name: </label>
            <input {...nameProps} className={`border ${useHasError(errors, "name") && 'border-red-500'}`} type="text" id="name"/>
            {useHasError(errors, "name") && <ErrorList errors={errors['name']}/>}
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input {...emailProps} className={`border ${useHasError(errors, "email") && 'border-red-500'}`} type="email" id="email"/>
            {useHasError(errors, "email") && <ErrorList errors={errors['email']}/>}
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input {...passwordProps} className={`border ${useHasError(errors, "password") && 'border-red-500'}`} type="password" id="password"/>
            {useHasError(errors, "password") && <ErrorList errors={errors['password']}/>}
          </div>
          <div>
            <label htmlFor="password_confirmation">Confirm Password: </label>
            <input {...password_confirmationProps} className={`border ${useHasError(errors, "password_confirmation") && 'border-red-500'}`} type="password" id="password_confirmation"/>
            {useHasError(errors, "password_confirmation") && <ErrorList errors={errors['password_confirmation']}/>}
          </div>
          <input type="submit" value="Register"/>
        </div>
      </form>
    </div>
  )
}