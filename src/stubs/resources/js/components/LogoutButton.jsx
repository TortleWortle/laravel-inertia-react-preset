import React from 'react'
import { Inertia } from '@inertiajs/inertia';

export default function LogoutButton() {
  const logout = () => {
    Inertia.post('/logout')
  }

  return (
    <button className="px-4 py-2 border" onClick={logout}>Logout</button>
  )
}