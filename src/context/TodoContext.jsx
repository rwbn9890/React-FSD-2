import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext();

const TodoContextProvider = ({children}) => {
    const [task, setTask] = useState("")
const [list, setList] = useState([])
const [upId, setUpId] = useState("")
const [theme, setTheme] = useState("dark")
const [count, setCount] = useState(false)
const [note, setNote] = useState("")
const [num, setNum] = useState(0)



useEffect(() => {
    document.querySelector("html").classList = theme
}, [theme])

    function handleChange(e){
        setTask(e.target.value)
        setCount(true)
    }

    function handleTask(){

        setList([
            ...list,
            {
                id:uuidv4(),
                task,
                note,
                status:false,
            }
        ])
        toast("Task added Successfully...!")

        setTask("")
    }


    function handleTodo(e, index)
    {
        setNum(num+1)
    }


    function editTask(ele)
    {
            console.log(ele)
            setTask(ele.task)
            setUpId(ele.id)
    }

    function updateTask(){
            let newList  = list.map((ele) => {
                if(ele.id == upId)
                {
                    ele.task = task
                }
                return ele;
            })

            // let newList = list.map((ele) => ele.id == upId ? {...ele, task: task}  : ele )

           

            setList(newList)
            setTask("")
            setUpId("")
    }

    console.log(list)


    return (
        <TodoContext.Provider value={{handleChange, handleTask, task, list, editTask, updateTask, upId, setTheme, count, note, setNote, num, setNum, handleTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider



export const useTodo = () => {
  const todoCont = useContext(TodoContext);
  return todoCont
}