import React from 'react'
import SeachInput from './SeachInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function Sidebar() {
  return (
    <div className='md:border-r md:border-gray-500 p-4 flex flex-col w-full md:w-5/12 lg:w-3/12 select-none'>
      <SeachInput />
      <Conversations />
      <LogoutButton />
    </div>
  )
}

export default Sidebar
