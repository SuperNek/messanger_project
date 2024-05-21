import React from 'react'
import { IoLogOutOutline } from "react-icons/io5";
import { useLogout } from '../../hooks/useLogout';

function LogoutButton() {
  const {loading, logout} = useLogout();

  return (
    <div className='mt-auto'>
      {!loading ? (
        <IoLogOutOutline className='w-9 h-9 text-gray-300 cursor-pointer hover:opacity-50 duration-200'
        onClick={logout}
        />
      ) : (
        <span className='loading loading-spinner'></span>
      )
      }
    </div>
  )
}

export default LogoutButton
