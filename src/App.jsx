import React, { useContext } from "react"
import Button from "./Component/Button"
import {CountContext} from "./context/CountContextProvider"
import Todo from "./Component/todo/Todo"

function App() {

  const { count } = useContext(CountContext)

  console.log(count)

  return (
    <>

      <div className="max-w-xl shadow shadow-sm shadow-amber-100 p-4 mx-auto">
        <h1>Count:- <span className="text-2xl">{count} </span></h1>

        <Button>Inc</Button>

      </div>

      <div className="max-w-xl my-50 border border-slate-400 rounded-2xl shadow-amber-500 p-4 mx-auto">
      <Todo/>

      </div>
    </>
  )
}

export default App
