import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {items: [], totalQuantity: 0};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers:{
        replaceCart: (state, action) =>{
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItem: (state, action) =>{
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;

            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    quantity: 1,
                    title: newItem.title
                });
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItem: (state, action) =>{
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;

            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});


export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;