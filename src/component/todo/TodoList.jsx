import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleDelete, handleStatus } from '../../redux/todo/Action';
const TodoList = () => {

const todo = useSelector((state)=>state.todo)
const dispatch = useDispatch()


    return (
        <div>
            <div className="max-w-xl mx-auto my-10">
                <table className="table-auto" >
                    <tr>
                        <th className='p-2 border rounded-3'>Id</th>
                        <th className='p-2 border rounded-3'>Todo</th>
                        <th className='p-2 border rounded-3'>status</th>
                        <th className='p-2 border rounded-3'>Delete</th>
                    </tr>
                    {
                        todo?.map((ele)=>(
                            <tr key={ele.id}>
                                <td className='p-2 border rounded-3'>{ele.id}</td>
                                <td className='p-2 border rounded-3'>{ele.text}</td>
                                <td className='p-2 border rounded-3'><button onClick={()=> dispatch(handleStatus(ele.id))} >{ele.status ? "✅" : "❌"}</button></td>
                                <td className='p-2 border rounded-3'><button onClick={() => dispatch(handleDelete(ele.id))}>🗑️</button></td>
                            </tr>
                        ))
                    }
                </table>


            </div>
        </div>
    );
}

export default TodoList;
