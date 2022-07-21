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
  burgers: [
    {
      id: 1,
      name: 'Simple',
      price: 150,
    },
    {
      id: 2,
      name: 'Simple con Queso',
      price: 250,
    },
    {
      id: 3,
      name: 'Doble Carne',
      price: 350,
    },
    {
      id: 4,
      name: 'Doble Carne/Doble Queso',
      price: 150,
    },
  ],
  copyBurgers: [],
  products: [],
  combos: [],
  beverages: [],
  ingredients: [],
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
