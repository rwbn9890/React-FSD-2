
import { useEffect, useState } from 'react'
import Small from './components/Small'
import Big from './components/Big'

import './App.css'

import { Alert, Button } from './Bootstraped/Bootstraped'



function App() {





 
const BigerWraper = Big(Small)

  return (
    <>
      {/* <BigerWraper /> */}
    <div className="container my-5">

      <Button type="danger" icon="⛔"> Error Button</Button>

      <Button type="success" icon="✅" >Success Button</Button>

      <Button type="success" icon="⚠️" >Warning Button</Button>

    </div>



    <Alert type="danger" message="invalide Creediantail" />

    </>
  ) 
}

export default App
