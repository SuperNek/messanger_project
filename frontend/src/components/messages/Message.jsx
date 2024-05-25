import {useAuthContext} from "../../contexts/authContext"
import useConversation from "../../store/useConversation";

const Message = ({message}) => {

  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const isFromUser = message.senderId === authUser._id;

  const messageClassName = isFromUser ? 'chat chat-end' : 'chat chat-start';

  const profilePic = isFromUser ? authUser.profilePicture : selectedConversation.profilePicture;

  const bgColor = isFromUser ? "bg-purple-600" : "bg-cyan-300";

  return (
    <div className={`chat ${messageClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img src={profilePic} alt="" />
        </div>
      </div>
      <div className={`chat-bubble text-zinc-300 ${bgColor}`}>{message.message}</div>
      <div className='chat-footer opacity-75 text-xs flex gap-1 items-center text-zinc-200'>12:33</div>
    </div>
  )
}

export default Message
