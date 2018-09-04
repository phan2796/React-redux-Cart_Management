import * as types from './../constants/ActionType';

export const actAddToCart = (product, quantity) => {
     return{
         type: types.ADD_TO_CART,
         product,
         quantity
     }
}

export const actChangeMsg = (msg) => {
    return{
        type: types.CHANGE_MSG,
        msg
    }
}
export const actDeleteProductInCart = (id) => {
    return{
        type: types.DELETE_PRODUCT_IN_CART,
        id
    }
}

export const actDecreaseQuantity = (id) => {
    return{
        type: types.DECREASE_QUANTITY,
        id
    }
}

export const actIncreaseQuantity = (id) => {
    return{
        type: types.INCREASE_QUANTITY,
        id
    }
}