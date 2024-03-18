import { createSlice } from "@reduxjs/toolkit"

 
 const initialState={
    shopDetails:null
 }

 const laundryShop = createSlice({
    name:'shop',
    initialState,
    reducers:{
        addShop:(state,action)=>{
            state.shopDetails= action.payload
            
        },
        removeShop:(state)=>{
            state.shopDetails=null
        }
    }

 })

 export const {addShop}=laundryShop.actions
 export default laundryShop.reducer