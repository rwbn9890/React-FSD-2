
import { useEffect, useState } from 'react'
import NavbarExample from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Users, { fetUsers } from './components/Users'
import Contact from './components/Contact'
import { Routes, Route, useNavigate } from 'react-router'
import User from './components/User'
import Login from './components/Login'

function App() {
  const [log, setLog] = useState({email:"", password:""})


  const navigate = useNavigate()

    function handleChange(e){
        const {name, value} = e.target
        setLog({
            ...log,
            [name]:value
        })
    }

    function handleLogin(){
      if(log.email == "demo@gmail.com" && log.password=="demo123")
      {
        alert("logged Successfully")
        navigate("/home")
      }
    }
  

  return (
    <>

<NavbarExample/>

        <Routes>
          <Route path="/home" element={ <Home/>} />
          <Route path="/" element={ <Login handleChange={handleChange} handleLogin={handleLogin} />} />
          <Route path="/about" element={ <About/>} />
          <Route path="/users" loader={ async() => await fetUsers()} element={ <Users />} />
          <Route path="/contact" element={ <Contact/>} />
          <Route path="/user/:userId" element={ <User/>} />
        </Routes>

      </>


  )
}

export default App
