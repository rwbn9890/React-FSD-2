
import { useState } from 'react'
import './App.css'


function App() {

const [num, setNum] = useState(0)


function handleCount(){
  setNum(num+1)
}

console.log(num)

  return (
    <>

    <h1>this heading {num}</h1>

    <button className='border px-10 bg-green-700' onClick={handleCount}>inc</button>

    </>
  )
}

export default App
