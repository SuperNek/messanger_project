import React from 'react'
import SeachInput from './SeachInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function Sidebar() {
  return (
    <div className='border-r border-gray-500 p-4 flex flex-col w-3/12'>
      <SeachInput />
      <Conversations />
      <LogoutButton />
    </div>
  )
}

export default Sidebar
