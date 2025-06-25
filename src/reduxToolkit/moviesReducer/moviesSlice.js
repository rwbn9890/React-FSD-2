import { createSlice } from "@reduxjs/toolkit";

 let state = {
        list:[],
        userList:[]
    }

const moviesSlice = createSlice({
    name:"movies",
    initialState:state,
    reducers:{
        allMovies:(state, action) =>{
            state.list = action.payload
        },
        allUsers: (state, action)=>{
            state.userList = action.payload
        }
    }
})
export const moviesActions = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;