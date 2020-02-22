import React from 'react';

const MyA = (props) => (
  <a className="px-2" {...props}></a>
)

export default function Welcome({ auth: { user } }) {
  return (
    <>
      <div className="flex justify-center items-center relative h-screen font-thin text-gray-600">
        <div className="absolute top-0 right-0 font-normal uppercase pt-2 pr-4">
          {user == null ? (<>
            <MyA href="/login">Login</MyA>
            <MyA href="/register">Register</MyA>
          </>) : <MyA href="/home">Home</MyA>}
        </div>
        <div className="text-center">
          <div className="mb-2 text-6xl">
            Laravel + Inertia + React + Tailwind
        </div>

          <div className="font-semibold uppercase">
            <MyA href="https://inertiajs.com">Inertia</MyA>
            <MyA href="https://reactjs.org">React</MyA>
            <MyA href="https://tailwindcss.com">Tailwind</MyA>
            <MyA href="https://laravel.com/docs">Docs</MyA>
            <MyA href="https://laracasts.com">Laracasts</MyA>
            <MyA href="https://laravel-news.com">News</MyA>
            <MyA href="https://blog.laravel.com">Blog</MyA>
            <MyA href="https://nova.laravel.com">Nova</MyA>
            <MyA href="https://forge.laravel.com">Forge</MyA>
            <MyA href="https://vapor.laravel.com">Vapor</MyA>
            <MyA href="https://github.com/laravel/laravel">GitHub</MyA>
          </div>
        </div>
      </div>
    </>
  )
}