import { ImSearch } from "react-icons/im";
import React from 'react'

const SeachInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input w-full sm:w-full md:input-sm lg:input-md rounded-full m-2 bg-gray-600'/>
        <button className="btn btn-outline btn-primary btn-circle mr-2 hover:opacity-50">
            <ImSearch className="w-6 h-6 outline-none"/>
        </button>
    </form>
  )
}

export default SeachInput
