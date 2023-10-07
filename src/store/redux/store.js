// import { configureStore } from '@reduxjs/toolkit';

// import favoritesReducer from './favorites';

// export const store = configureStore({
//   reducer: {
//     favoriteMeals: favoritesReducer
//   }
// });

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import categorySlice from './slices/categorySlice';
import titleSlice from './slices/titleSlice';

// import favoritesSlice from './slices/favorites';

import cartSlice from './slices/cartSlice';

const rootReducer = combineReducers({
  //  favoritesReducer: favoritesSlice,
  categoryReducer: categorySlice,
  titleReducer: titleSlice,
  cartReducer: cartSlice
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
