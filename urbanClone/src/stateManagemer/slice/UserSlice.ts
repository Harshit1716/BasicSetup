import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import URLManager from '../../networkLayer/URLManager';
import {Alert} from 'react-native';
import {HomeInterface} from '../../stateManagemer/models/HomeScreenModel';
import {UserType, OrderType, AddOrderType} from '../models/UserProfileModel';

// Define the initial state using that type
const initialState: UserType = {
  email: '',
  name: '',
  cart: null,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, {payload}: PayloadAction<{email: string; name: string}>) => {
      state.email = payload.email;
      state.name = payload.name;
    },
    logout: state => {
      state.email = '';
      state.name = '';
      state.cart = null;
    },
    addToCart: (state, {payload}: PayloadAction<AddOrderType>) => {
      // console.log(payload);
      state.cart = {
        totalAmount: (state.cart?.totalAmount ?? 0) + payload?.orderAmount ?? 0,
        Orders: state?.cart?.Orders
          ? [
              ...state.cart.Orders,
              {
                orderId: state.cart.Orders.length,
                orderAmount: payload.orderAmount,
                serviceType: payload.serviceType,
                serviceName: payload.serviceName,
                dateOfBooking: new Date(),
                serviceDate: new Date(),
                serviceId: payload.serviceId,
              },
            ]
          : [
              {
                orderId: 0,
                orderAmount: payload.orderAmount,
                serviceType: payload.serviceType,

                serviceName: payload.serviceName,
                dateOfBooking: new Date(),
                serviceDate: new Date(),
                serviceId: payload.serviceId,
              },
            ],
      };
    },
  },
});

export const {login, logout, addToCart} = userSlice.actions;

export default userSlice.reducer;
