import { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {

  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!message) return;

    await sendMessage(message);
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='px-4 my-3'>
        <div className='w-full relative'>
            <input type="text" 
            className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white'
            placeholder='Type a message'
            value={message}
            onChange={(event) => setMessage(event.target.value)}/>
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 duration-200 hover:opacity-50'>
              {loading ? <div className='loading loading-spinner'></div> : <IoSend />}
            </button>
        </div>
      </div>
    </form>
  )
}

export default MessageInput
