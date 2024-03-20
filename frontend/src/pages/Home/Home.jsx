import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex w-screen h-screen lg:w-11/12 lg:h-5/6 rounded-lg overflow-hidden bg-gray-700 bg-clip-padding'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home
