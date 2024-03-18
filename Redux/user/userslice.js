import { createSlice } from "@reduxjs/toolkit"

 

 const initialState={
    currentUser:null,
    loggedIn:false
 }

 const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signinSuccess:(state,action)=>{
            state.currentUser = action.payload
            state.loggedIn=true
        },
        Signout:(state)=>{
            state.currentUser=null
            state.loggedIn=false
        }
    }
 })

 export const {signinSuccess,Signout}=userSlice.actions
 export default userSlice.reducer