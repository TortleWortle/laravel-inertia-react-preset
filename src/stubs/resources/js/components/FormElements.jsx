import React from 'react'
import { useHasError } from "../hooks/useHasError";
import ErrorList from "./ErrorList";

export function FormTextInput(props) {
  const { hasError, ...restProps } = props;
  return (
    <input {...restProps} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${hasError ? 'border-red-500' : ''}`} />
  )
}

export function FormLabel(props) {
  return (
    <label {...props} className="block text-gray-700 text-sm font-bold mb-2"></label>
  )
}

export function FormCopyright(props) {
  const { children, ...restProps } = props
  return (
    <p {...restProps} className="text-center text-gray-500 text-xs">
      {children || <> &copy;2020 Acme Corp. All rights reserved. </>}
    </p>
  )
}

export function FormButton(props) {
  return (
    <input type="button" {...props} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${props.className || ''}`} />
  )
}

export function FormLink(props) {
  return (
    <a {...props} className={"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"}/>
  )
}

export function FormFieldErrors({errors, field}) {
  return (
    <>
      {useHasError(errors, field) && <ErrorList errors={errors[field]} />}
    </>
  )
}