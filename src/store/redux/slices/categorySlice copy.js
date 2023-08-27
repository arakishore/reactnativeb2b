// categorySlice.js
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    categories: [],
    products: [],
    productsByCategory: {},
    status: 'idle', // Possible values: 'idle', 'loading', 'succeeded', 'failed'
    error: null,
};

// Fetch categories and products on app initialization
export const fetchCategoriesAndProductsExtra = createAsyncThunk(
    'category/fetchCategoriesAndProductsExtra',
    async () => {
      const response = await axios.get('https://www.webtreeindia.com/ecomb2b1/api/frontend/home/homedata.php');
      return response.data;
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
    
          state.categories = category_list;
    
          const productsByCategory = {};
    
          category_list.forEach((category) => {
            const productsForCategory = all_product_list.filter(
              (product) => product.category_id === category.category_id
            );
            productsByCategory[category.category_id] = productsForCategory;
          });
    
          state.productsByCategory = productsByCategory;
        });
        builder.addCase(fetchCategoriesAndProductsExtra.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
      },
});

export const { setCategories, setProductsByCategory } = categorySlice.actions;

// Thunk to fetch categories and products
export const fetchCategoriesAndProducts = () => async (dispatch) => {
    try {
        const response = await axios.get('https://www.webtreeindia.com/ecomb2b1/api/frontend/home/homedata.php');

        const { category_list, all_product_list } = response.data;

        dispatch(setCategories(category_list));
        dispatch(setProducts(all_product_list));
         

        const productsByCategory = {};

        category_list.forEach((category) => {
          const productsForCategory = all_product_list.filter(
            (product) => product.category_id === category.category_id
          );
          productsByCategory[category.category_id] = productsForCategory;
        });
    
        // Dispatch products by category
        dispatch(setProductsByCategory(productsByCategory));
         
    } catch (error) {
        console.error('Error fetching categories and products:', error);
    }
};

export default categorySlice.reducer;
