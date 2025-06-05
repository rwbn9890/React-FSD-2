import React from 'react'

const TodoList = ({todo}) => {

  console.log("checking for memoization")

  return (
    <>

    <ul className="max-w-md space-y-1 text-white list-disc list-inside dark:text-white">
        {
            todo.map((ele, index) => (
                <li>{ele} - {index+1}</li>
            ))
        }
       
    </ul>

  
    </>
  )
}

export default React.memo(TodoList) 