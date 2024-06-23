import React from 'react'
import { logout } from '../lib/action'

const LogoutButton = () => {
  return (
    <form action={logout}>
        <button className="block px-4 py-2 text-sm bg-[#222] text-white hover:bg-gray-800 w-full">Logout</button>
    </form>
  )
}

export default LogoutButton