import React, { useContext } from "react"
import Button from "./Component/Button"
import {CountContext} from "./context/CountContextProvider"

function App() {

  const { count } = useContext(CountContext)

  console.log(count)

  return (
    <>

      <div className="max-w-xl shadow shadow-2xl shadow-amber-500 p-4 mx-auto">
        <h1>Count:- <span className="text-2xl">{count} </span></h1>

        <Button>Inc</Button>

      </div>
    </>
  )
}

export default App
