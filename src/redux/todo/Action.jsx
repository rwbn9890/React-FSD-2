
export const ADD_TODO = "ADD_TODO"
export const UPDATE_STATUS = "UPDATE_STATUS"
export const DELETE_TODO = "DELETE_TODO"



export function handleAdd(to){
    return {
        type:ADD_TODO,
        payload:{
            to,
        }
    }
}

export function handleStatus(id){
    return {
        type:UPDATE_STATUS,
        payload:{
            id
        }
    }
}

export function handleDelete(id){
    return {
        type:DELETE_TODO,
        payload:{
            id
        }
    }
}

