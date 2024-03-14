import { ImSearch } from "react-icons/im";
import React from 'react'

const SeachInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Искать порнушку' className='input rounded-full m-2 bg-neutral-500'/>
        <button className="btn btn-outline btn-primary btn-circle mr-2">
            <a href="https://youtube.com" className="p-5"></a>
            <ImSearch className="w-6 h-6 outline-none"/>
        </button>
    </form>
  )
}

export default SeachInput
