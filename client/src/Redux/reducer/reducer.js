/* eslint-disable no-case-declarations */
import {
  GET_PRODUCT,
  SET_CATEGORY,
  ADD_TO_CART,
  CLEAR_CART,
  DELETE_ONE_PRODUCT_CART,
  DELETE_PRODUCT_CART,
  LOCAL_STORAGE,
  /* GET_COMBOS,
  GET_BEVERAGES,
  GET_INGREDIENTS,
  GET_POTATOES,
  GET_VEGGIE,
  GET_BURGERS,
  GET_PRODUCT_BY_ID, */
} from '../actions/actions';
import { addItem, deleteAllItem, deleteItem } from './utils';

const initialState = {
  products: [],
  cart: [],
  copyCart: [],
  category: '',
};

const rootReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
        copyProducts: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case ADD_TO_CART:

      return {
        ...state,
        cart: addItem(action.payload, state.products, state.cart),
      };
    case DELETE_ONE_PRODUCT_CART:
      return {
        ...state,
        cart: deleteItem(state.cart, action.payload),
      };
    case DELETE_PRODUCT_CART:
      return {
        ...state,
        cart: deleteAllItem(state.cart, action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: state.copyCart,
      };
    case LOCAL_STORAGE:
      return{
        ...state,
        cart: action.payload
      }
    /* case GET_BURGERS:
      return {
        ...state,
        burgers: action.payload,
        copyBurgers: action.payload,
      };
    
    case GET_COMBOS:
      return {
        ...state,
        combos: action.payload,
      };
    case GET_BEVERAGES:
      return {
        ...state,
        beverages: action.payload,
      };
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      };
    case GET_POTATOES:
      return {
        ...state,
        potatoes: action.payload,
      };
    case GET_VEGGIE:
      return {
        ...state,
        veggie: action.payload,
      };
    
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        productDetail: action.payload,
      } */
    default:
      return state;
  }
};

export default rootReducer;
