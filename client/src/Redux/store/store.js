import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from "../features/burgerSlices";

const store = configureStore({
  reducer: {
    burgers: burgerReducer,
  },
});

export default store;
