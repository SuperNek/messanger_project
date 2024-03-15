import React from 'react'
import { IoSkull } from "react-icons/io5";
import { IoMdKey } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { IoAlert } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Register = () => {
    const [inputs, setInputs] = React.useState({
        firstName: "",
        username: "",
        password: "",
        confirmPassword: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs);
    }

    return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-700 bg-clip-padding'>
            <h1 className='text-3xl font-semibold text-center text-gray-300 mb-6'>Register
                <span className='text-violet-500'> Messanger</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div className='mb-5'>
                    <label className="input flex items-center gap-2 h-15 bg-gray-600 text-white">
                        <IoSkull className='w-6 h-6 lg:w-9 lg:h-9'/>
                        <input type="text" className="grow text-lg" placeholder="First Name"
                            value={inputs.firstName}
                            onChange={(e) => setInputs({...inputs, firstName: e.target.value})}
                        />
                    </label>
                </div>
                <div className='mb-5'>
                    <label className="input flex items-center gap-2 h-15 bg-gray-600 text-white">
                        <IoPersonCircle className='w-9 h-9' />
                        <input type="text" className="grow text-lg" placeholder="Username"
                            value={inputs.username}
                            onChange={(e) => setInputs({...inputs, username: e.target.value})}
                        />
                    </label>
                </div>
                <div className='mb-5'>
                    <label className="input flex items-center gap-2 h-15 bg-gray-600 text-white">
                        <IoMdKey className='w-9 h-9'/>
                        <input type="password" className="grow text-lg" placeholder="Password"
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        />
                    </label>
                </div>
                <div>
                    <label className="input flex items-center gap-2 h-15 bg-gray-600 text-white">
                        <IoAlert className='w-9 h-9'/>
                        <input type="password" className="grow text-lg" placeholder="Confirm password" 
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                        />
                    </label>
                </div>
                <Link to="/login" className='label-text-alt hover:underline text-gray-300'>{"Already have an account?"}</Link>
                <div>
                    <button className='btn lg:btn-lg btn-outline btm-neutral btn-block mt-5 font-semibold text-base sm:text-lg md:text-xl lg-text-2xl'>
                        <p className='mb-1'>Register</p>
                    </button>
                </div>
            </form>
        </div>
    </div> 
  )
}

export default Register
