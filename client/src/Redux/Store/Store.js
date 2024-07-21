import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import mainSlice from "../Reducers/Reducer";

const rootReducer = combineReducers({
    mainSlice
})

export const store = configureStore({
     reducer: rootReducer,
})