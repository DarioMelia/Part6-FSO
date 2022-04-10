import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    msg:"Wellcome to my page",
    type:"info",
    isShown:"false"
}

const notificationSlice = createSlice({
    name:"notification",
    initialState,
    reducers:{
        showNot(state,action){
            const {msg,type} = action.payload
            return {msg,type,isShown:true}
        },
        hideNot(state,action){
            return {...state, isShown:false}   
        }
    }
})

export const {showNot,hideNot} = notificationSlice.actions
export default notificationSlice.reducer