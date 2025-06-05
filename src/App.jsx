
import { useCallback, useMemo, useState } from 'react'
import './App.css'
import TodoList from './component/TodoList'


function App() {

  const [count, setCount] = useState(0)
  const [status, setStatus] = useState(false)
  const [todo, setTodo] = useState([])


  // function handleTodo(){
  //   setTodo([...todo, "new Todo"])
  // }


  const handleTodo = useCallback(() =>{
      setTodo([...todo, "new Todo"])
  }, [todo])






  return (
    <>
      <div className='max-w-xl mx-auto my-10 grid grid-cols-3'>
        <div>
           <button onClick={()=> setCount(count+1)} class="rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Count - {count}
          </button>
        </div>
        <div>
           <button onClick={handleTodo}  class="rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Add Todo
          </button>
          <br/>
          <TodoList todo={todo}/>
        </div>
        <div>
           <button onClick={() => setStatus(!status)} class="rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            {status ? "TRUE" : "FALSE"}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
