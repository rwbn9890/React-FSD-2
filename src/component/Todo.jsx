import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Todo = () => {

    const [to, setTo] = useState("")

    const dispatch = useDispatch()

 function handleAdd(){
    return {
        type:"ADD_TODO",
        payload:{
            id:1,
            text:to
        }
    }
}

    return (
        <div>
            <input type="text" onChange={(e)=> setTo(e.target.value)} />
            <button onClick={() => dispatch()} >Add</button>
        </div>
    );
}

export default Todo;
