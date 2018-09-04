import React, { Component } from 'react';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Msg from '../constants/Message';
import CartResult from '../components/CartResult';
import { actDeleteProductInCart, actChangeMsg, actDecreaseQuantity, actIncreaseQuantity } from '../actions/index'

class CartContainer extends Component {
    render() {
        var { carts } = this.props;
        return (
            <Cart>
                {this.showCartItems(carts)}
                {this.showTotalPrice(carts)}

            </Cart>

        );
    }
    showCartItems = (carts) => {
        var result = <tr><td>{Msg.MSG_CART_EMPTY}</td></tr>;
        if (carts.length > 0) {
            result = carts.map((item, index) => {
                return (
                    <CartItem key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart = {this.props.onDeleteProductInCart}
                        onChangeMsg = {this.props.onChangeMsg}
                        onIncreaseQuantity = {this.props.onIncreaseQuantity}
                        onDecreaseQuantity = {this.props.onDecreaseQuantity}

                    />
                )
            })
        }
        return result;
    }
    showTotalPrice = (carts) => {
        var total = 0;
        if (carts.length > 0) {
            for (let index = 0; index < carts.length; index++) {
                total += carts[index].product.price * carts[index].quantity;
                
            }
        }
        return <CartResult total = {total}/>
    }
}
CartContainer.propTypes = {
    carts: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    )
}
const mapStateToProps = state => {
    return {
        carts: state.carts
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (id) => {
            dispatch(actDeleteProductInCart(id));
        },
        onChangeMsg: (msg) =>{
            dispatch(actChangeMsg(msg));
        },
        onDecreaseQuantity: (id) =>{
            dispatch(actDecreaseQuantity(id));
        },
        onIncreaseQuantity: (id) =>{
            dispatch(actIncreaseQuantity(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

