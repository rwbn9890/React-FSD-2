import React, { useContext } from 'react'
import {PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import { TodoContext } from '../../context/TodoContext'

const TodoList = () => {

const {list, editTask} = useContext(TodoContext)

  return (
   <>
      <div className='grid grid-cols-4 gap-2'>
        {
          list.map((ele) => (
            <div key={ele.id} className='rounded-md border border-fuchsia-400 p-2'>
              <h4 className='font-bold'>{ele.task}</h4>
              <p className={ele.status ? 'text-green-600' : 'text-red-600'}>{
                  ele.status ?  <span>Complete</span> : <span>Not Complite</span>
                }</p>
                    {
                      ele.note &&
                        <p>
                      {ele.note}
                    </p>
                    }
              

              <div>
                <button className=' rounded-full p-1 bg-gray-100 hover:bg-gray-200'>
                  <TrashIcon className="size-5 text-fuchsia-500"/>
                </button>
                <button onClick={() => editTask(ele)} className=' rounded-full p-1 bg-gray-100 hover:bg-gray-200'>
                  <PencilIcon className="size-5 text-blue-500"/>
                </button>
              </div>
            </div>
          ))
        }
      </div>
   </>
  )
}

export default TodoList