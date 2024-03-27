import React from 'react'
import { IoLogOutOutline } from "react-icons/io5";

function LogoutButton() {
  return (
    <div className='mt-auto'>
      <IoLogOutOutline className='w-9 h-9 text-gray-300 cursor-pointer hover:opacity-50 duration-200'/>
    </div>
  )
}

export default LogoutButton
