import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/task/taskSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
    reducer: {
        taskSlice : taskSlice,
        userSlice : userSlice,
    },
})

export default store;