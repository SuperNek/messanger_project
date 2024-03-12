import { ImSearch } from "react-icons/im";
import React from 'react'

const SeachInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input rounded-full m-2' />
        <button className="btn btn-outline btn-primary btn-circle mr-2">
            <ImSearch className="w-6 h-6 outline-none"/>
        </button>
    </form>
  )
}

export default SeachInput
