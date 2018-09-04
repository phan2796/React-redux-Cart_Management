// import * as types from './../constants/ActionType';

var initalState = [
    {
        id: 1,
        name: 'Iphone X ',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
        description: 'Sản phẩm của Apple',
        price: 500,
        rating: 4,
        inventory: 5
    }, {
        id: 2,
        name: 'Samsung S8',
        image: 'https://cdn.tgdd.vn/Products/Images/42/78479/samsung-galaxy-s8-4-400x460-400x460.png',
        description: 'Sản phẩm của Samsung',
        price: 400,
        rating: 5,
        inventory: 5
    }, {
        id: 3,
        name: 'Oppo FindX',
        image: 'https://cdn.tgdd.vn/Products/Images/42/165189/oppo-find-x-2-400x460-400x460.png',
        description: 'Sản phẩm của Oppo',
        price: 350,
        rating: 3,
        inventory: 5
    }
];

const products = (state = initalState, action) =>{
    switch (action.type) {
    
        default:
            return [...state];
    }
}
export default products