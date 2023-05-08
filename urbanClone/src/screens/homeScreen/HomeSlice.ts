import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import URLManager from '../../networkLayer/URLManager';
import {Alert} from 'react-native';
import {HomeInterface} from '../../stateManagemer/models/HomeScreenModel';

export const getData = createAsyncThunk(
  'home/getData',
  async ({id}: {id: number}) => {
    try {
      let urlManager = new URLManager();
      return urlManager
        .getData(id)
        .then(res => {
          console.log(JSON.stringify(res));
          // Define the type or model in promise to get the desired response
          return res.json() as Promise<HomeInterface>;
        })
        .then(res => {
          return res;
          // if (res.status == 200) {
          //   return res;
          // } else {
          //   Alert.alert('Error', res.message);
          // }
        })
        .catch(e => {
          Alert.alert(e.name, e.message);
          return e.response;
        })
        .finally(() => {});
    } catch (error) {
      Alert.alert('Error');
    }
  },
);

// Define a type for the slice state
interface CounterState {
  value: number;
  data: HomeInterface;
  flag: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 1,
  data: {},
  flag: true,
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setFlag: (state, action: PayloadAction<boolean>) => {
      state.flag = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getData.pending, (state, action) => {
      console.log('getData method started');
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      if (action?.payload) {
        state.data = action?.payload;
      }
      console.log(action.payload);
    });
    builder.addCase(getData.rejected, (state, action) => {
      Alert.alert('Error', 'something went wrong');
    });
  },
});

export const {increment, decrement, incrementByAmount, setFlag} =
  counterSlice.actions;

export default counterSlice.reducer;
