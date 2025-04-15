import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[],
    amount : 0,
    total : 0,
    isLoading : true,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.total = 0;
            state.amount = 0;
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const Item = state.cartItems.find((item) => item.id === id);
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
            state.amount -= 1;
            state.total -= Item.price;
        },
        addItem: (state, action) => {
            const { product } = action.payload;
            const Item = state.cartItems.find((item) => item.id === product.id);
            if (Item) {
                //
            } 
            else {
                state.cartItems.push({ ...product });
                state.amount += 1;
                state.total += product.price;
            }
        },
        
    },
});

export const { clearCart , addItem  , removeItem} = cartSlice.actions

export default cartSlice.reducer