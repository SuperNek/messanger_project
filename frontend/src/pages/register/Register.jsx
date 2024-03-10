import React from 'react'

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-700 bg-clip-padding'>
            <h1 className='text-3xl font-semibold text-center text-gray-300 mb-6'>Register
                <span className='text-violet-500'> Messanger</span>
            </h1>

            <form>
                <div className='mb-5'>
                    <label className="input flex items-center gap-2 h-15">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox='0 0 32 32' fill='currentColor'><path d="M30 6H2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM2 8h28v18H2V8zm25.166 8H15a1 1 0 0 0 0 2h12.166a1 1 0 0 0 0-2zm0 4H15a1 1 0 0 0 0 2h12.166a1 1 0 0 0 0-2zm0-8H15a1 1 0 0 0 0 2h12.166a1 1 0 0 0 0-2zm-21.586.416a2.416 2.416 0 1 0 4.832 0 2.416 2.416 0 1 0-4.832 0zm2.468 3.382c-2.184 0-3.952 2.372-3.952 5.3s7.904 2.926 7.904 0-1.77-5.3-3.952-5.3z"></path></svg>
                        <input type="text" className="grow text-lg mb-1" placeholder="First Name" />
                    </label>
                </div>
                <div className='mb-5'>
                    <label className="input flex items-center gap-2 h-15">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48" fill="currentColor" ><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm0 28.4c-5.01 0-9.41-2.56-12-6.44.05-3.97 8.01-6.16 12-6.16s11.94 2.19 12 6.16c-2.59 3.88-6.99 6.44-12 6.44z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
                        <input type="text" className="grow text-lg mb-1" placeholder="Username" />
                    </label>
                </div>
                <div className='mb-5'>
                    <label className="input flex items-center gap-2 h-15">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox='0 0 48 48' fill='currentColor'><path fill="none" d="M0 0h48v48H0z"></path><path d="M25.3 20c-1.65-4.66-6.08-8-11.3-8-6.63 0-12 5.37-12 12s5.37 12 12 12c5.22 0 9.65-3.34 11.3-8H34v8h8v-8h4v-8H25.3zM14 28c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg>
                        <input type="password" className="grow text-lg mb-1" placeholder="Password" />
                    </label>
                </div>
                <div>
                    <label className="input flex items-center gap-2 h-15">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill='currentColor'><path d="M12 1C5.926 1 1 5.926 1 12s4.926 11 11 11 11-4.926 11-11S18.074 1 12 1zm-1.5 15.5L6 12l1.5-1.5 3 3 5.956-5.956 1.5 1.413L10.5 16.5z"></path></svg>
                        <input type="password" className="grow text-lg mb-1" placeholder="Confirm password" />
                    </label>
                </div>
                <a href="#" className='label-text-alt hover:underline'>{"Already have an account?"}</a>
                <div>
                    <button className='btn btn-outline btm-neutral btn-block mt-5'>Register</button>
                </div>
            </form>
        </div>
    </div> 
  )
}

export default Register
