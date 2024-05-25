import useConversation from "../../store/useConversation"

const Conversation = ({conversation, lastIndex}) => {

    const {selectedConversation, setSelectedConversation} = useConversation()

    const isSelected = selectedConversation?._id === conversation._id

    return (
    <>
        <div className={`flex gap-6 items-center bor hover:bg-gray-500 duration-200 rounded p-2 py-3 cursor-pointer
            ${isSelected ? 'bg-gray-500' : ""}
        `}
        onClick={() => setSelectedConversation(conversation)}>
            <div className="avatar offline">
                <div className="w-12 rounded-full">
                    <img src={conversation.profilePicture} alt='user avatar'/>
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div>
                    <p className='font-bold text-gray-200'>{conversation.username}</p>
                </div>
            </div>
        </div>

        {!lastIndex && <div className='divider my-0 py-0 h1 snap-start'/>}
    </>
  )
}

export default Conversation