import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import { IoChatbubbles } from 'react-icons/io5';
import { FaPersonCircleQuestion } from "react-icons/fa6";


const Messages = () => {

  const {messages, loading} = useGetMessages();

  console.log(messages);

  return (
    <div className='px-4 flex-1 overflow-auto scrollbar'>

      {!loading 
        && messages.length > 0 
        && messages.map((message) => <Message key={message._id} message={message} />)
      }

      {loading 
        && <span className='loading loading-spinner w-8 h-8'></span>
      }

      {!loading 
        && messages.length === 0 
        && (
              <div className='w-full h-full flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-semibold text-center text-gray-300 mb-6'>
                  Кажется, тут пустовато..
                </h1>
                <FaPersonCircleQuestion className='w-10 h-10  md:w-16 md:h-16'/>
              </div>
            )
      }

    </div>
  )
}

export default Messages
