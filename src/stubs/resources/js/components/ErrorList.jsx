import React from 'react';

export default function ErrorList({ errors }) {
  return (
    <ul>
      {errors.map(el => <li key={el} className="text-red-500 text-xs italic">{el}</li>)}
    </ul>
  )
}