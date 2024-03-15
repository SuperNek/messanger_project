import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex w-11/12 h-5/6 rounded-lg overflow-hidden bg-gray-700 bg-clip-padding'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home
