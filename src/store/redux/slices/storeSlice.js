import { createSlice } from '@reduxjs/toolkit';

const storeSlice = createSlice({
  name: 'store',
  initialState: {
    categories: [],
    products: [],
    cart: [],
  },
  reducers: {
    setCategories: (state, action) => {
    //  state.categories = action.payload;
    },
    setProducts: (state, action) => {
     // state.products = action.payload;
    },
    addToCart: (state, action) => {
      // const productToAdd = state.products.find(product => product.id === action.payload);
      // state.cart.push(productToAdd);
    },
    removeFromCart: (state, action) => {
     // state.cart = state.cart.filter(product => product.id !== action.payload);
    },
  },
});

export const { setCategories, setProducts, addToCart, removeFromCart } = storeSlice.actions;

export default storeSlice.reducer;
