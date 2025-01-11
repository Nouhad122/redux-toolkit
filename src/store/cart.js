import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {items: [], totalQuantity: 0};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers:{
        addItem: (state, action) =>{
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(!existingItem){
                state.items.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    totalPrice: newItem.totalPrice,
                    quantity: 1,
                    name: newItem.title
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