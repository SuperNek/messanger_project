import React, { useState } from 'react'
import { IoPersonCircle } from "react-icons/io5";
import { IoMdKey } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';

const Login = () => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const {loading, login} = useLogin();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    await login(username, password);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-24 lg:min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-700 bg-clip-padding'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 mb-6'>
            Login
            <span className='text-violet-500'> Messanger</span>
        </h1>
        <form onSubmit={handleSubmit}>
            <div className='mb-5'>
            <label className="input flex items-center gap-2 h-15 bg-gray-600 text-white">
                <IoPersonCircle className='w-6 h-6 lg:w-9 lg:h-9' />
                <input type="text" className="grow text-lg mb-1 " placeholder="Username" 
                value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label>
            </div>
            <div>
            <label className="input flex items-center gap-2 h-15 bg-gray-600 text-white">
                <IoMdKey className='w-6 h-6 lg:w-9 lg:h-9'/>
                <input type="password" className="grow text-lg mb-1 text-white" placeholder="Password" 
                value={password} onChange={(e) => setPassword(e.target.value)}/>
                <a className="label-text-alt hover:underline text-gray-300 text-nowrap md:text-wrap" href='#'>Forgot password?</a>
            </label>
            </div>
            <Link to="/register" className='label-text-alt hover:underline text-gray-300'>{"Don't have an account?"}</Link>
            <div>
                <button className='btn btn-outline btm-neutral btn-block mt-5 font-semibold text-2xl' disabled={loading}>
                  {loading ? <span className='loading loading-spinner'></span> : "Login"}
                </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
