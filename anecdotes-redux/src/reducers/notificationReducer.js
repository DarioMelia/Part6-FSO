import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    msg:"Wellcome to my page",
    isErr:false
}

const notificationSlice = createSlice({
    name:"notification",
    initialState,
    reducers:{
        showNot(state,action){
            const msg = action.payload
            return {...state, msg:msg}
        }
    }
})

export const {showNot} = notificationSlice.actions
export default notificationSlice.reducer