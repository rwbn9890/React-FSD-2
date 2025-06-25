import { configureStore } from "@reduxjs/toolkit";

import { moviesReducer } from "./moviesReducer/moviesSlice";
import { counterReducer } from "./counterReducer/counterSlice";
import { todoReducer } from "./todoReducer/todoSlice";


const store = configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer,
        movies:moviesReducer
    }
})

export default store