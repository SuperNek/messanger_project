import Login from "./pages/login/Login"
import Home from "./pages/Home/Home"
import Register from "./pages/register/Register"
import { Route, Routes, Navigate} from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./contexts/authContext"


function App() {
  const {authUser} = useAuthContext();

  return (
    <div className="bg-violet-950 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={authUser ? <Navigate to="/" /> : <Register />} />
      </Routes>
      <Toaster /> 
    </div>
  )
}

export default App
