import {
  GET_BURGERS,
  GET_PRODUCT,
  GET_COMBOS,
  GET_BEVERAGES,
  GET_INGREDIENTS,
  GET_POTATOES,
  GET_VEGGIE,
} from '../actions/actions';

const initialState = {
  burgers: [],
  copyBurgers: [],
  products: [],
  combos: [],
  beverages: [],
  ingredients: [
    {
      id: 1,
      name: 'tomate',
      price: 0.5,
      isVeggie: true
      },
      {
        id: 2,
        name: 'carne',
        price: 2.5,
        isVeggie: false
      },
      {
        id: 3,
        name: 'queso',
        price: 1.3,
        isVeggie: true
      },
      {
        id: 4,
        name: 'lechuga',
        price: 0.8,
        isVeggie: true
        },
  ],
  potatoes: [],
  veggie: [],
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
    default:
      return state;
  }
};

export default rootReducer;
