import {
    createStore,
    combineReducers,
    applyMiddleware
} from "redux";

import {composeWithDevTools} from 'redux-devtools-extension';


import {
    productReducer
} from '../reducers/productReducer';

import {
    cartReducer
} from '../reducers/cartReducer';

// import {productMiddleWare} from '../middlewares/productMiddleWare';

const reducers = combineReducers({
    products: productReducer,
    cart: cartReducer
});

const middleWares = [];

export const store = createStore(reducers,composeWithDevTools(applyMiddleware(...middleWares)));