import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext();

const TodoContextProvider = ({children}) => {
    const [task, setTask] = useState("")
const [list, setList] = useState([])
const [upId, setUpId] = useState("")
const [theme, setTheme] = useState("dark")



useEffect(() => {
    document.querySelector("html").classList = theme
}, [theme])

    function handleChange(e){
        setTask(e.target.value)
    }

    function handleTask(){

        setList([
            ...list,
            {
                id:uuidv4(),
                task,
                status:false,
            }
        ])
        toast("Task added Successfully...!")

        setTask("")
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
        <TodoContext.Provider value={{handleChange, handleTask, task, list, editTask, updateTask, upId, setTheme}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider