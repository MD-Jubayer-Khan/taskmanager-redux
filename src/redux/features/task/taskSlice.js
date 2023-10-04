import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    task : [],
}

const tasksSlice = createSlice ({
    name : "taskSlice",
    initialState,
    reducers: {}
})

export default tasksSlice.reducer