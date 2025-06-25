import React, { useState } from 'react';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../../reduxToolkit/todoReducer/todoSlice';

const Todo = () => {

    const [todo, setTodo]  = useState("")

    const todoList = useSelector((state) => state.todo)
    const dispatch  =useDispatch()

    console.log(todoList)

    return (
         <div className='max-w-7xl mx-auto my-10 text-center'>

                 <div className="flex gap-2">
                        <input className='border' onChange={(e) => setTodo(e.target.value)} type="text" />
                        <button onClick={() => dispatch(todoActions.addTodo(todo))} >Add</button>
                    </div> 
       
            </div>
    );
}

export default Todo;
