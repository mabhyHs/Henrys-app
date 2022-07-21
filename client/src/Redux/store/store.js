import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from "../reducer/reducer";

const store = configureStore({
  reducer: {
    burgers: burgerReducer,
  },
});

export default store;
