import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartDetails: []
};

const cartPage = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTocart: (state, action) => {
            const existingServiceIndex = state.cartDetails.findIndex(service => service.name === action.payload.name);
            if (existingServiceIndex !== -1) {
                state.cartDetails[existingServiceIndex].quantity++;
            } else {
                state.cartDetails.push({ ...action.payload, quantity: 1 });
            }
        },
        removeShop: (state, action) => {
            state.cartDetails = state.cartDetails.filter(service => service.name !== action.payload.name);
        },
        clearCart: (state) => {
            state.cartDetails = [];
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const serviceIndex = state.cartDetails.findIndex(service => service.name === name);
            if (serviceIndex !== -1) {
                state.cartDetails[serviceIndex].quantity = quantity;
            }
        }
    }
});

export const addTocart = (service, shopName) => ({
    type: 'cart/addTocart',
    payload: { ...service, shopName }
});

export const { removeShop, clearCart, updateQuantity } = cartPage.actions;
export default cartPage.reducer;
