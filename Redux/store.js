import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userslice from "./user/userslice";
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistStore from "redux-persist/es/persistStore";
import laundryShop from "./user/laundryShop";
import cartPage from "./user/cartPage";

const rootReducer = combineReducers({ user:userslice,shop:laundryShop,cart:cartPage})
const persistConf = {
    key:'root',
    version:1,
    storage:AsyncStorage

}
const persistReducers = persistReducer(persistConf,rootReducer)

const store = configureStore({
    reducer:persistReducers,
    middleware:(defMidware)=>defMidware({
        serializableCheck:false
    })
})
export default store
export const persistor = persistStore(store)