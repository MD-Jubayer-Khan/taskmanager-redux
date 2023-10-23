import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    name: "AR Asif",
    email: "abc@def.com"
}

const userSlice = createSlice ({
    name : "userSlice",
    initialState,
    reducers: {}
});

export default userSlice.reducer