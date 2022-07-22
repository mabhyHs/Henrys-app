const initialState = {
    burgers: [],
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
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_BURGERS':
        return {
          ...state,
          burgers: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;