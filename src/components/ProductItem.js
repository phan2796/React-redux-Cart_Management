import React, { Component } from 'react';
import * as MSG from './../constants/Message';

class ProductItem extends Component {
    render() {
        var { productItem } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={productItem.image}
                            className="img-fluid" alt={productItem.name} />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{productItem.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">

                            {this.showRacting(productItem.rating)}

                        </ul>
                        <p className="card-text">
                            {productItem.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{productItem.price}$</span>
                            <span className="right">
                                <a
                                    className="btn-floating blue-gradient"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Add to Cart"
                                    onClick={
                                        () => {
                                            this.onAddToCart(productItem)
                                            this.onChangeMsg(MSG.MSG_ADD_TO_CART_SUCCESS)
                                        }
                                    } >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        );

    }
    onAddToCart = (productItem) => {
        this.props.onAddToCart(productItem);
    }
    onChangeMsg = (msg) => {
        this.props.onChangeMsg(msg);
    }
    showRacting(number) {
        var result = [];
        for (var index = 1; index <= 5; index++) {
            if (index <= number) {
                result.push(<li key={index}><i className="fa fa-star"></i></li>);
            } else {
                result.push(<li key={index}><i className="fa fa-star-o"></i></li>);
            }
        }
        return result;
    }
}

export default ProductItem;
