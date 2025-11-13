// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existing = state.items.find((p) => p.id === action.payload.id);
            if (!existing) {
                state.items.push({ ...action.payload, quantity: 1 });
            } else {
                alert("❗ This product is already in your cart!");
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((p) => p.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
