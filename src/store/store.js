import { configureStore } from '@reduxjs/toolkit';
import locationSlice from './locationSlice';

const store = configureStore({
  reducer: {
    currentLocation: locationSlice.reducer,
  },
});

export default store;
