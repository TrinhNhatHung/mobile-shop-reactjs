import * as Message from '../constants/Message';
import * as Type from '../constants/ActionType';
const initState = {
    content : Message.WELCOME
}

export const messageReducer = (state = initState ,action)=> {
    switch(action.type){
        case Type.CHANGE_MESSAGE :
            return {
                ...state,
                content : action.content
            }
    }
    return state;
}