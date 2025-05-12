
import { useEffect, useState } from 'react'
import './App.css'



function App() {

  const [todo, setTodo] = useState([])
  const [to, setTo] = useState("")


  function handleTodo(){
 
    let obj = {
      id: Math.round(Math.random()*1000) ,
      task : to,
      status:false
    }

    // todo.push(obj);

    setTodo([...todo, obj])

  
  }


  function handleUpdate(id){
      // let newTodo = todo.find((ele) => ele.id == id)

      // newTodo.status = !newTodo.status;

     let newTodo = todo.map((ele)=> ele.id == id ? {...ele, status: !ele.status} : ele)

      setTodo(newTodo)


      
  }



// useEffect(()=>{


// }, [])



  return (
    <>

       <div className='w-5xl m-auto border flex flex-col gap-4 p-4'>
            <input className='border' type="text" onChange={(e) =>  setTo(e.target.value) } />
            <button onClick={handleTodo}>Add</button>
       </div>
       <div className='border w-5xl my-5 gap-5 flex flex-col mx-auto'>
        {
          todo.map((ele) => (
              <div key={ele.id} className='flex gap-5'>
                  <h3 className='font-bold'>{ele.task}</h3>
                  <button className='bg-green-600 p-2 rounded-md' onClick={() => handleUpdate(ele.id)}  >{ele.status ? "Completed" : "not Completed" }</button>
            </div>
          ))
        }
       
       </div>
    </>
  )
}

export default App
