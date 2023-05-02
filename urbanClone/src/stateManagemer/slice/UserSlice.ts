import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import URLManager from '../../networkLayer/URLManager';
import {Alert} from 'react-native';
import {HomeInterface} from '../../stateManagemer/models/HomeScreenModel';
import {UserType} from '../models/UserProfileModel';

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
    },
    addToCart: (state, {payload}: PayloadAction<{}>) => {},
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
