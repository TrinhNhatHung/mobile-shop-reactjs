import * as Type from '../constants/ActionType';

const initState = {
    list : []
}

export const adminReducer = (state = initState , action)=> {
    switch(action.type){
        case Type.SET_PRODUCT_ADMIN :
            return {
                ...state,
                list : action.products
            }
        default :
          return state;
    }
}