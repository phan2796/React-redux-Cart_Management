import {combineReducers } from 'redux';
import products from './products';
import carts from './carts';
import messages from './messages';



const appReducers = combineReducers({
    products,
    carts,
    messages

});

export default appReducers;