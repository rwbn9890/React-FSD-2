import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext();

const TodoContextProvider = ({children}) => {
    const [task, setTask] = useState("")
const [list, setList] = useState([])


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
    }

    console.log(list)


    return (
        <TodoContext.Provider value={{handleChange, handleTask, task, list}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider