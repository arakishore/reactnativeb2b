// categorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API_BASE_URL from '../../../config/Config';
import endpoint from '../../../config/Endpoints';

const initialState = {
  categories: [],
  products: [],
  cart_info: [],
  productsByCategory: [],
  status: 'idle', // Possible values: 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

// Fetch categories and products on app initialization
export const fetchCategoriesAndProductsExtra = createAsyncThunk(
  'category/fetchCategoriesAndProductsExtra',
  async (requestData) => {  // Accept requestData as a parameter
    try {
      const response = await axios.post(API_BASE_URL + endpoint.homedata, requestData);
      return response.data;
    } catch (error) {
      throw error; // Rethrow the error to be handled by Redux Toolkit
    }
  }


);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      // state.categories = action.payload;
    },
    setProductsByCategory: (state, action) => {
      // const { categoryId, products } = action.payload;
      // state.productsByCategory[categoryId] = products;
    },
    setProducts: (state, action) => {
      //  state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesAndProductsExtra.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCategoriesAndProductsExtra.fulfilled, (state, action) => {
       //console.log("fetchCategoriesAndProductsExtra : ",action.payload);
      state.status = 'succeeded';
      const { category_list, all_product_list,cart_info } = action.payload;

      state.categories = category_list;
      state.products = all_product_list;
      state.cart_info = cart_info;
      const categoriestemp = [];
      // Clear productsByCategory object
      state.productsByCategory = {};

      category_list.forEach((category) => {
        const productsForCategory = all_product_list.filter((product) => {

          if (product.category_id === category.category_id) {
            categoriestemp.push(category);

            return true; // Include the product in the filtered array
          } else {
            return false; // Exclude the product from the filtered array
          }
        });
        state.productsByCategory[category.category_id] = productsForCategory;

      });
      // state.categories = categoriestemp;
      //state.productsByCategory = productsByCategory1;
    });
    builder.addCase(fetchCategoriesAndProductsExtra.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const { setCategories, setProducts, setProductsByCategory } = categorySlice.actions;


export default categorySlice.reducer;
