import React from 'react';
import LogoutButton from "../components/LogoutButton"

export default function Home(props) {
  return (
    <div>
       <h1>Home</h1>
       <div>
         Hello, {props.auth.user.name}!
       </div>
       <LogoutButton></LogoutButton>
    </div>
  )
}