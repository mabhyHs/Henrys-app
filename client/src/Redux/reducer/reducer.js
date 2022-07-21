const initialState = {
    burgers: [],
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