import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!state.cart) {
        state.cart = action.payload;
      } else {
        let current = state.cart;
        state.cart = [...current, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      const stateValue = current(state);
      let cart = [...stateValue.cart];
      let index = cart.findIndex((item) => item.id == action.payload);
      if (index >= 0) {
        cart.splice(index, 1);
        state.cart = [...cart];
      } else {
        state.cart = state.cart;
      }
    },
    resetCartState: state => initialState,
  },
});
export const {
  addToCart,
  removeFromCart,
  resetCartState,
} = cartSlice.actions;

export const selectCard = (state) => state.cart.cart;

export default cartSlice.reducer;
