
import { useEffect, useState } from 'react'
import NavbarExample from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import Contact from './components/Contact'
import { Routes, Route, useNavigate } from 'react-router'
import User from './components/User'
import Login from './components/Login'

function App() {
  const [log, setLog] = useState({email:"", password:""})
  const [list, setList] = useState([])
  
  
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
    
    
      function addFriend(ele){
        setList([...list, ele])
      }

  return (
    <>

<NavbarExample list={list}/>

        <Routes>
          <Route path="/home" element={ <Home/>} />
          <Route path="/" element={ <Login handleChange={handleChange} handleLogin={handleLogin} />} />
          <Route path="/about" element={ <About/>} />
          <Route path="/users"  element={ <Users addFriend={addFriend} list={list} />} />
          <Route path="/contact" element={ <Contact/>} />
          <Route path="/user/:userId" element={ <User/>} />
        </Routes>

      </>


  )
}

export default App
