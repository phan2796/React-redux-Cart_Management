import * as types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem("carts"));
var initalState = data ? data : [];
var checkExist = (carts, id) => {
    if (carts.length > 0) {
        for (let index = 0; index < carts.length; index++) {
            if (carts[index].product.id === id) {
                return index;
            }

        }
    }
    return -1;
};
const carts = (state = initalState, action) => {
    var index = -1;
    var { product, quantity, id } = action;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = checkExist(state, product.id);
            if (index === -1) {
                state.push({
                    product: product,
                    quantity: quantity
                })
            } else {
                state[index].quantity += quantity;
            }
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            console.log(action);
            index = checkExist(state, id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];
        case types.DECREASE_QUANTITY:
            console.log(action);
            index = checkExist(state, id);
            if (index !== -1) {
                if (state[index].quantity > 1) {
                    state[index].quantity -= 1;
                }
            }
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];
        case types.INCREASE_QUANTITY:
            console.log(action);
            index = checkExist(state, id);
            if (index !== -1) {
                state[index].quantity += 1;
            }
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}
export default carts