// categorySlice.js
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    categories: [],
    products: [],
    productsByCategory: {}, // Initialize as an empty object

    status: 'idle', // Possible values: 'idle', 'loading', 'succeeded', 'failed'
    error: null,
};

// Fetch categories and products on app initialization
export const fetchCategoriesAndProductsExtra = createAsyncThunk(
    'category/fetchCategoriesAndProductsExtra',
    async () => {
      try {
        const response = await axios.get('https://www.webtreeindia.com/ecomb2b1/api/frontend/home/homedata.php');
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
          state.categories = action.payload;
        },
        setProductsByCategory: (state, action) => {
          const { categoryId, products } = action.payload;
          state.productsByCategory[categoryId] = products;
        },
        setProducts: (state, action) => {
          state.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategoriesAndProductsExtra.pending, (state) => {
          state.status = 'loading';
        });
        builder.addCase(fetchCategoriesAndProductsExtra.fulfilled, (state, action) => {
          state.status = 'succeeded';
          const { category_list, all_product_list } = action.payload;
    
         // state.categories = category_list;
          state.products = all_product_list;
          state.productsByCategory = {};

          const categoriestemp = [];
          // Clear productsByCategory object
     

          category_list.forEach((category) => {
            const productsForCategory = all_product_list.filter((product) => {

              if ( product.category_id === category.category_id) {
                categoriestemp.push(category);
                state.productsByCategory[category.category_id] = product;
                return true; // Include the product in the filtered array
              } else {
                return false; // Exclude the product from the filtered array
              }
            });
            

          });
          state.categories = categoriestemp;
          //state.productsByCategory = productsByCategory1;
        });
        builder.addCase(fetchCategoriesAndProductsExtra.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
      },
});

export const { setCategories,setProducts, setProductsByCategory } = categorySlice.actions;
 

export default categorySlice.reducer;
