import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {cartOpened: false};

 const uiSlice = createSlice({
    name: "ui",
    initialState: initialStatus,
    reducers:{
        toggleCart: (state) =>{
            state.cartOpened =  !state.cartOpened
        }
    }
 });


 export const uiSliceActions = uiSlice.actions;

 export default uiSlice.reducer;