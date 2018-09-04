import React, { Component } from 'react';
import * as MSG from './../constants/Message';

class CartItem extends Component {
    render() {
        var {item} = this.props;
        return (
            <tr>
                            <th scope="row">
                                <img src={item.product.image}
                                    alt={item.product.name} className="img-fluid z-depth-0" />
                            </th>
                            <td>
                                <h5>
                                    <strong>{item.product.name}</strong>
                                </h5>
                            </td>
                            <td>{item.product.price}$</td>
                            <td className="center-on-small-only">
                                <span className="qty">{item.quantity} </span>
                                <div className="btn-group radio-group" data-toggle="buttons">
                                    <label className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light"
                                        onClick = {() => this.onDecreaseQuantity(item.product.id)}>
                                        <a>—</a>
                                    </label>
                                    <label className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light"
                                        onClick = {() => this.onIncreaseQuantity(item.product.id)}>
                                        <a>+</a>
                                    </label>
                                </div>
                            </td>
                            <td>{this.showTotalPrice(item.product.price, item.quantity)}$</td>
                            <td>
                                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                                    title="" data-original-title="Remove item"
                                    onClick ={ () => {this.onDeleteProductInCart(item.product.id)
                                     this.onChangeMsg(MSG.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)}}>
                                    X
                                </button>
                            </td>
                        </tr>
                       
   
        );
    }
    showTotalPrice(price, quantity){
        return (price * quantity);
    }
    onDeleteProductInCart = (id) =>{
        this.props.onDeleteProductInCart(id);
    }
    onChangeMsg = (msg) =>{
        this.props.onChangeMsg(msg);
    }
    onDecreaseQuantity= (id) =>{
        this.props.onDecreaseQuantity(id);
    }
    onIncreaseQuantity= (id) =>{
        this.props.onIncreaseQuantity(id);

    }
}

export default CartItem;
