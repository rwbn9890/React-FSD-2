import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
  import { ToastContainer } from 'react-toastify';

const Todo = () => {
  return (
    <>
      <TodoInput/>
      <TodoList/>
      <ToastContainer/>
    </>
  )
}

export default Todo