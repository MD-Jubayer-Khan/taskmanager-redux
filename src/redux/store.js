import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/task/taskSlice";

const store = configureStore({
    reducer: {
        task : taskSlice
    },
})

export default store;