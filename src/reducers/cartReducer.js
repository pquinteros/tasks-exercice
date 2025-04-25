export const initialState = {
  cart: [],
};
  
// Reducer
export function cartReducer(state, action) {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case 'REMOVE_ITEM':
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
        };
      case 'CLEAR_CART':
        return {
          ...state,
          cart: [],
        };
      default:
        return state;
    }
  }