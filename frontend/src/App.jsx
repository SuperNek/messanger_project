import Login from "./pages/login/Login"
import Home from "./pages/Home/Home"
import Register from "./pages/register/Register"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className="bg-violet-950 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> 
    </div>
  )
}

export default App
