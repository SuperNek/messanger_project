import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';


const Conversations = () => {

  const {loading, conversations} = useGetConversations();

  return (
    <div className='py-2 flex flex-col overflow-auto scrollbar snap-y'>
      <div className='divider my-0 py-0 h1' />

        {conversations.map((conversation, idx) => (
          <Conversation 
            key={conversation._id}
            conversation={conversation}
            lastIndex = {idx === conversations.length - 1}
          />
        ))}

        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations