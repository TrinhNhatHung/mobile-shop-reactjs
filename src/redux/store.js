import { combineReducers , createStore, applyMiddleware } from 'redux';
import { productReducer} from '../redux/products';
import { cartReducer} from '../redux/cart';
import { messageReducer} from '../redux/message';
import { adminReducer } from '../redux/admin';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    products : productReducer,
    cart : cartReducer,
    message : messageReducer,
    admin : adminReducer
});

export const store =  createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);