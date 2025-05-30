import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'

const TodoInput = () => {
const {handleChange, handleTask, task} = useContext(TodoContext)

  return (
    <>
    <div className="w-full max-w-xs">
        <div className="mb-4 flex rounded-3xl border p-1">
          <input value={task} onChange={handleChange} className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Add Todo" />
          <button onClick={handleTask} className='p-1 rounded-full border border-amber-100 hover:bg-slate-400 bg-slate-200 '>➕</button>
        </div>
    </div>
    </>
  )
}

export default TodoInput