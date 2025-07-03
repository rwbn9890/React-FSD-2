import { configureStore } from "@reduxjs/toolkit";
import { prodReducer } from "./productReducer/prodSlice";
import { usersReducer } from "./usersReducer/usersSlice";
import { dummyApi } from "./dummyReducer/dummyApi";

export const store = configureStore({
    reducer:{
        prod:prodReducer,
        users:usersReducer,
        [dummyApi.reducerPath]:dummyApi.reducer
    },
    middleware:(gt) => gt().concat(dummyApi.middleware)
})