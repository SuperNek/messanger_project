import React from 'react'
import SeachInput from './SeachInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function Sidebar() {
  return (
    <div className='border-r border-gray-500 p-4 flex flex-col'>
      <SeachInput />
      <div className='divider px-3 py-0 my-1'></div>
      <Conversations />
      <LogoutButton />
    </div>
  )
}

export default Sidebar
