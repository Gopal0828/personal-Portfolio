
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    darkMode: true,
}



const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        switchThemeToDark: (state, action) => {
            
            state.darkMode = action.payload
        },
        switchThemeToLight: (state, action) => {
            state.darkMode = action.payload
        }
    }
})

export default mainSlice.reducer

export const  {switchThemeToDark, switchThemeToLight} = mainSlice.actions