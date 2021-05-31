import * as Type from "../constants/ActionType";

const initState = {
  list: [],
  pagination: {
    page: 1,
    limit: 3,
    totalProducts : 0
  },
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case Type.SET_PRODUCT:
      return {
        ...state,
        list: action.products,
      };
    case Type.CHANGE_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page : action.page
        }
      };
    case Type.SET_TOTAL_PRODUCTS :
      return {
        ...state,
        pagination : {
          ...state.pagination,
          totalProducts : action.total
        }
      }
    default : 
      return state;
  }
};
