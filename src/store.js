import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './features/users/userSlice'
export const store = configureStore({
    reducer: {
        users: usersReducer,                        //to use this user you need to use use Selector
    },
})