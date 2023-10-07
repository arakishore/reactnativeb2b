// categorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API_BASE_URL from '../../../config/Config';
import endpoint from '../../../config/Endpoints';

// Create an async thunk to fetch data from the API

// Fetch carlist and products on app initialization
export const fetchCartDataExtra = createAsyncThunk(
  'cartslice/fetchCartDataExtra',
  async (requestData) => {  // Accept requestData as a parameter
    try {

      const response = await axios.post(API_BASE_URL + endpoint.cartlist, requestData);
      //  console.log(response.data);
      return response.data;
    } catch (error) {
      throw error; // Rethrow the error to be handled by Redux Toolkit
    }
  }

);
  
export const sendCartItems = createAsyncThunk(
  'cartslice/sendCartItems',
  async (requestData) => {  // Accept requestData as a parameter
    try {
      const response = await axios.post(API_BASE_URL + endpoint.cartaddeditdeleteitem,requestData);
     // console.log("sendCartItems response",response);
      return response.data;
    } catch (error) {
      throw error; // Rethrow the error to be handled by Redux Toolkit
    }
  }

);

// Create an async thunk to remove an item from the cart

export const removeItemFromCart = createAsyncThunk(
  'cartslice/removeItemFromCart',
  async (requestData) => {  // Accept requestData as a parameter
    try {
      const response = await axios.post(API_BASE_URL + endpoint.deletecartitem, requestData);
     // console.log("removeItemFromCart response",response);
      return response.data;
    } catch (error) {
      throw error; // Rethrow the error to be handled by Redux Toolkit
    }
  }

);


const cartSlice = createSlice({
  name: 'cartslice',
  initialState: {
    status: 'idle', // Possible values: 'idle', 'loading', 'succeeded', 'failed'
    error: null,
    message: 'List of Items in cart !',
    cart_items: [],
    total_cart_items: 0,
    total_sub_total: 0,
    total_save_amt: 0,
    total_net_payable_amt: 0,
    net_payable_info: [],
    label_total_save_description: 'You are saving',
    label_discount_description: 'Discount',
    label_net_payable_description: 'Net Payable',
    label_shopingcart: 'Shopping Cart',
    extra_info_forshipping: 0,
    label_coupon_info: 'Tap & Save - Apply Coupon',
    applied_coupon_code: 0,
    coupon_applied_status: 0,
    delveryslot_selected_fulldate: '',
    delveryslot_selected_date: '',
    delveryslot_selected_time: '',
    delveryslot_selected_amt: 0,

  },
  reducers: {
    addToCart: (state, action) => {
      //  state.push(action.payload);
      //state.ids.push(action.payload.id);
    },
    removeFromCart: (state, action) => {
      // return state.filter(item => item.id !== action.payload);
      //state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
    cartList: (state, action) => {
      // return state.filter(item => item.id !== action.payload);
      //state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartDataExtra.pending, (state) => {
        // Set loading to true when the API call is pending
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartDataExtra.fulfilled, (state, action) => {
        // Handle successful API response
        state.loading = false;
       // state.items = action.payload.items;
        //state.totalQuantity = action.payload.totalQuantity;
       // console.log("action.payload:",action.payload)
        state.cart_items=action.payload.cart_items;
        
        state.applied_coupon_code=action.payload.applied_coupon_code;
        state.coupon_applied_status=action.payload.coupon_applied_status;
        state.delveryslot_selected_amt=action.payload.delveryslot_selected_amt;
        state.delveryslot_selected_date=action.payload.delveryslot_selected_date;
        state.delveryslot_selected_fulldate=action.payload.delveryslot_selected_fulldate;
        state.delveryslot_selected_time=action.payload.delveryslot_selected_time;
        state.extra_info_forshipping=action.payload.extra_info_forshipping;
        state.total_cart_items=action.payload.total_cart_items;
        state.total_net_payable_amt=action.payload.total_net_payable_amt;
        state.total_save_amt=action.payload.total_save_amt;
        state.total_sub_total=action.payload.total_sub_total;
        state.net_payable_info=action.payload.net_payable_info;
        state.message=action.payload.message;
        state.label_total_save_description=action.payload.label_total_save_description;
        state.label_shopingcart=action.payload.label_shopingcart;
        state.label_net_payable_description=action.payload.label_net_payable_description;
        state.label_discount_description=action.payload.label_discount_description;
        state.label_coupon_info=action.payload.label_coupon_info;
        state.extra_info_forshipping=action.payload.extra_info_forshipping;
        
         
      })
      .addCase(fetchCartDataExtra.rejected, (state, action) => {
        // Handle API call error
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(sendCartItems.pending, (state) => {
        // Set loading to true when sending cart items
        state.loading = true;
        state.error = null;
      })
      .addCase(sendCartItems.fulfilled, (state, action) => {
        // Handle successful API response for sending cart items
        state.loading = false;
        // You can update state based on the response if needed
      })
      .addCase(sendCartItems.rejected, (state, action) => {
        // Handle API call error for sending cart items
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeItemFromCart.pending, (state) => {
        // Set loading to true when the removal action is pending
        state.loading = true;
        state.error = null;
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        // Handle successful removal of the item from the cart
        state.loading = false;
        // Remove the item with the matching itemId from the cart_items array
        state.cart_items = state.cart_items.filter((item) => item.itemId !== action.payload);
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        // Handle removal action error
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeFromCart, cartList } = cartSlice.actions;
export default cartSlice.reducer;
