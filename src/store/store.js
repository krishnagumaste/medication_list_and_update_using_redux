// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import medicationReducer from './slice';

const store = configureStore({
  reducer: {
    medication: medicationReducer,
  },
});

export default store;
