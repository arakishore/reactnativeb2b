import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setCategories: (state, action) => {
      //state.ids.push(action.payload);
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
