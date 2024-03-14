import React from 'react'
import sasha from "../../assets/sanya.jpg"

const Conversation = () => {
  return (
    <>
        <div className='flex gap-6 items-center bor hover:bg-lime-500 rounded p-2 py-3 cursor-pointer'>
            <div className="avatar offline">
                <div className="w-12 rounded-full">
                    <img src={sasha} alt='user avatar'/>
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div>
                    <p className='font-bold text-gray-200'>Саша пауков</p>
                </div>
            </div>
        </div>
        <div className='divider my-0 py-0 h1' />
    </>
  )
}

export default Conversation
