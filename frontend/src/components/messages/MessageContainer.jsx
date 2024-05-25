import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { IoChatbubbles } from "react-icons/io5";
import useConversation from "../../store/useConversation"

function MessageContainer() {

    const {selectedConversation, setSelectedConversation} = useConversation();

    useEffect(() => {
      return () => setSelectedConversation(null)
    }, [setSelectedConversation])

    return (
    <div className='w-full hidden sm:hidden md:flex lg:flex flex-col'>
        {!selectedConversation ? ( <NoChatSelected /> ) : 
          (
          <>
          <div className='bg-gray-500 px-4 py-2 mb-2 text-center'>
              <span className='text-zinc-300 font-semibold'>{selectedConversation.username}</span>
          </div>
          
          <Messages />
          <MessageInput />
          </>
          )
        }
    </div>
  )
}

export default MessageContainer

function NoChatSelected() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full mx-auto'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 mb-6'>
            Выберите чат для начала общения
        </h1>
        <IoChatbubbles className='w-10 h-10  md:w-16 md:h-16'/>
    </div>
  )
}
