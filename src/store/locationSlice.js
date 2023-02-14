import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    lati: 0,
    long: 0,
    locationGu: '',
    locationDong: '',
  },
};

const locationSlice = createSlice({
  name: 'currentLocation',
  initialState,
  reducers: {
    currentSet: (state, action) => {
      state.value = action.payload;
      //   state.lati = action.payload[0];
      //   state.long = action.payload[1];
      //   state.locationGu = action.payload[2];
      //   state.locationDong = action.payload[3];
    },
  },
});

export default locationSlice;

export const { currentSet } = locationSlice.actions;
