import * as Type from "../constants/ActionType";

const initState = {
  list: [],
};

var cartItem = undefined;
var position = undefined;

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case Type.ADD_PRODUCT_TO_CART:
        state.list.push(action.productInCart);
        return {
          ...state,
          list: state.list,
        };
    case Type.DELETE_PRODUCT_IN_CART:
      position = state.list.findIndex(
        (element) => element.id === action.atId
      );
      state.list.splice(position, 1);
      return {
        ...state,
        list: state.list,
      };
    case Type.UPDATE_PRODUCT_IN_CART:
      position = state.list.findIndex(
        (element) => element.id === action.atId
      );
      cartItem = state.list[position];
      cartItem.quantity = action.functional(cartItem.quantity);
      if (cartItem.quantity === 0){
        state.list.splice(position, 1);
      }    
      return {
        ...state,
        list: state.list,
      };
    case Type.COMPLETE_PURCHASE:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
