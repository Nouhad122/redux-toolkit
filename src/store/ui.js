import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {cartOpened: false, notification: null};

 const uiSlice = createSlice({
    name: "ui",
    initialState: initialStatus,
    reducers:{
        toggleCart: (state) =>{
            state.cartOpened =  !state.cartOpened
        },
        handleNotification: (state, action) =>{
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
 });


 export const uiSliceActions = uiSlice.actions;

 export default uiSlice.reducer;