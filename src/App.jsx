import React, { useContext } from "react"
import Button from "./Component/Button"
import {CountContext} from "./context/CountContextProvider"
import Todo from "./Component/todo/Todo"
import { TodoContext } from "./context/TodoContext"

function App() {

  const {setTheme} = useContext(TodoContext)
  const { count } = useContext(CountContext)

  console.log(count)

  return (
    <div className=" bg-amber-50 dark:bg-slate-800  focia:bg-fuchsia-900 h-screen relative">

      <button onClick={() => setTheme("dark")} className="m-1 border py-1 rounded-sm px-4 bg-amber-400 shadow">dark</button>
      <button  onClick={() => setTheme("light")}  className="m-1 border py-1 rounded-sm px-4 bg-amber-400 shadow">Light</button>
      <button  onClick={() => setTheme("focia")}  className="m-1 border py-1 rounded-sm px-4 bg-amber-400 shadow">Purple</button>

      {/* <div className="max-w-xl shadow shadow-sm shadow-amber-100 p-4 mx-auto">
        <h1>Count:- <span className="text-2xl">{count} </span></h1>

        <Button>Inc</Button>

      </div> */}



      <div className=" max-w-full bg-slate-800 dark:bg-slate-200  focia:bg-fuchsia-800 border border-slate-400 rounded-2xl shadow-amber-500 p-4 mx-auto absolute top-[25%] end-1/2 translate-x-1/2">
      <Todo/>

      </div>


    </div>
  )
}

export default App
