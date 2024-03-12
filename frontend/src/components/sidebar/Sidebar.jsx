import React from 'react'
import SeachInput from './SeachInput'
import Conversations from './Conversations'

function Sidebar() {
  return (
    <div>
      <SeachInput />
      <div className='divider px-3 py-0 my-1'></div>
      <Conversations />
      {/* <LogoutButton /> */}
    </div>
  )
}

export default Sidebar
