import React from 'react'
import Sidebar from '../../componets/sidebar/Sidebar'
import MessageContainer from '../../componets/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-700 bg-clip-padding'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home
