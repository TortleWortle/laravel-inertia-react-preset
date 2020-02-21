import React from 'react';

export default function ErrorList({ errors }) {
  return (
    <ul>
      {errors.map(el => <li key={el} className="text-red-700">{el}</li>)}
    </ul>
  )
}