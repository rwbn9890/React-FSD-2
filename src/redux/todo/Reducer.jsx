import { ADD_TODO, DELETE_TODO, UPDATE_STATUS } from "./Action";

export const reducerTodo = (store=[], action ) => {
    switch(action.type)
    {
        case ADD_TODO :
                            let obj = {
                                id: store.length == 0 ? 0 : store[store.length-1].id+1,
                                text:action.payload.to,
                                status:false
                            }
                            store.push(obj)
                            break;
        
        case UPDATE_STATUS :  
                                store = store.map((ele)=> ele.id == action.payload.id ? {...ele, status:!ele.status } : ele)
                                break;

        case DELETE_TODO : 
                            store = store.filter((ele)=> ele.id != action.payload.id)
                            break;
        default : 
                store;
    }

    return [...store]
}