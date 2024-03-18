import React from 'react'
import sasha from "../../assets/sanya.jpg"

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img src={sasha} alt="" />
        </div>
      </div>
      <div className='chat-bubble text-zinc-300 bg-gray-500'>
        жесть жесть жесть жесть жесть жесть жесть жесть жесть жесть жесть жесть
      </div>
      <div className='chat-footer opacity-75 text-xs flex gap-1 items-center text-zinc-200'>12:33</div>
    </div>
  )
}

export default Message
