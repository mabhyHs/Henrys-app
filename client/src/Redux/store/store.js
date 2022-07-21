/* eslint-disable import/no-extraneous-dependencies */
import { createStore, appyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer/reducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(appyMiddleware(thunk))
);

export default store;
