import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { IoChatbubbles } from "react-icons/io5";

function MessageContainer() {
    const noChatSelected = false;
    return (
    <div className='w-full hidden sm:hidden md:flex lg:flex flex-col'>
        {noChatSelected ? <NoChatSelected /> : (
        <>
        <div className='bg-gray-500 px-4 py-2 mb-2 text-center'>
            <span className='label-text'>To:</span> <span className='text-zinc-300 font-semibold'>Sasha</span>
        </div>
        
        <Messages />
        <MessageInput />
        </>
        )}
    </div>
  )
}

export default MessageContainer

function NoChatSelected() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full mx-auto'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 mb-6'>
            Select a chat to start messaging
        </h1>
        <IoChatbubbles className='w-10 h-10  md:w-16 md:h-16'/>
    </div>
  )
}
