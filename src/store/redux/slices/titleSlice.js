// store/titleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const titleSlice = createSlice({
  name: 'title',
  initialState: { title: 'Categories' }, // Make sure it's an object with the title property
  reducers: {
    updateTitle: (state, action) => {
      state.title = action.payload; // Make sure to update the title property
    },
    resetTitle: (state, action) => {
      state.title = 'Categories'; // Make sure to update the title property
    },
  },
});

export const { updateTitle, resetTitle } = titleSlice.actions;
export default titleSlice.reducer;
