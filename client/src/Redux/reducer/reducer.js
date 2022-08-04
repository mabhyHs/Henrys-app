import {
    GET_BURGERS,
    GET_PRODUCT,
    GET_COMBOS,
    GET_BEVERAGES,
    GET_INGREDIENTS,
    GET_POTATOES,
    GET_VEGGIE,
    GET_PRODUCT_BY_ID,
    GET_BURGER_BASE,
    SET_CATEGORY,
    ADD_TO_CART,
    CLEAR_CART,
    DELETE_ONE_PRODUCT_CART,
    DELETE_PRODUCT_CART,
    LOCAL_STORAGE,
    ADD_FAVORITES,
    ADD_TO_LOCAL,
    CLEAR_STATE,
    SET_LOGIN_STATE,
    ADD_BURGER_CUSTOM_TO_CART,
    POST_MP,
    GET_FAVORITES,
    REMOVE_FAVORITES,
    SET_DISCOUNT,
    GET_REVIEWS,
  } from '../actions/actions';
  
  import {
    addFav,
    addItem,
    addItemCustom,
    deleteAllItem,
    deleteItem,
    subsFav,
  } from './utils';
  
  const initialState = {
    burgers: [],
    copyBurgers: [],
    products: [],
    combos: [],
    beverages: [],
    ingredients: [],
    potatoes: [],
    veggie: [],
    category: '',
    productDetail: [],
    burgerBase: {},
    cart: [],
    favorites: [],
    loginState: JSON.parse(window.localStorage.getItem('user')),
    mercaDopago: '',
    reviews: [],
  };
  
  const rootReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case GET_BURGERS:
        return {
          ...state,
          burgers: action.payload,
          copyBurgers: action.payload,
        };
      case GET_PRODUCT:
        return {
          ...state,
          products: action.payload,
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
        };
      case GET_BURGER_BASE:
        return {
          ...state,
          burgerBase: action.payload,
        };
      case CLEAR_STATE:
        return {
          ...state,
          productDetail: [],
        };
  
      case SET_CATEGORY:
        return {
          ...state,
          category: action.payload,
        };
        case SET_DISCOUNT:
          return{
            ...state,
            cart: action.payload,
          }
  
      case ADD_TO_CART:
        /* payload es el id, array de products, y el array de carrito */
        return {
          ...state,
          cart: addItem(action.payload, state.products, state.cart),
        };
  
      case ADD_BURGER_CUSTOM_TO_CART:
        return {
          ...state,
          cart: addItemCustom(state.cart, action.payload),
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
          cart: [],
        };
      case LOCAL_STORAGE:
        return {
          ...state,
          cart: action.payload,
        };
      case GET_FAVORITES:
        return {
          ...state,
          favorites: action.payload,
        };
      case ADD_FAVORITES:
        return {
          ...state,
          favorites: action.payload,
        };
      case REMOVE_FAVORITES:
        return {
          ...state,
          favorites: action.payload,
        };
      case ADD_TO_LOCAL:
        return {
          ...state,
          favorites: action.payload,
        };
  
      case SET_LOGIN_STATE:
        return {
          ...state,
          loginState: action.payload,
        };
      case POST_MP:
        return {
          ...state,
          mercaDopago: action.payload,
        };    
      case GET_REVIEWS:
        return {
          ...state,
          reviews: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  