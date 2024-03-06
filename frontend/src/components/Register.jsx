import { useState } from "react"

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="bg-violet-950 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12">
                <input value={username}
                    onChange={event => setUsername(event.target.value)}
                    type="text" placeholder="username"
                    className="block w-full rounded-md p-2 mb-2 bg-slate-900 focus:outline outline-1 outline-yellow-100"/>
                <input value={password}
                    onChange={event => setPassword(event.target.value)} 
                    type="password" placeholder="password"
                    className="block w-full rounded-md p-2 mb-2 bg-slate-900 shadow-xl shadow-red-950 focus:outline outline-1 outline-yellow-100" />
                <button className="bg-violet-500 text-white block w-full rounded-md p-2">Register</button>
            </form>
        </div>
    )
}