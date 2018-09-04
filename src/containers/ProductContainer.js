import React, { Component } from 'react';
import Product from '../components/Product';
import ProductItem from '../components/ProductItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actAddToCart, actChangeMsg } from '../actions/index';

class ProductContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Product >
                {this.showProduct(products)}
            </Product>
        );
    }
    showProduct(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    productItem={product}
                    onAddToCart={this.props.onAddToCart}
                    onChangeMsg={this.props.onChangeMsg} />
            });
        }
        return result;
    }
}

ProductContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired
        })
    ).isRequired
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMsg: (msg) => {
            dispatch(actChangeMsg(msg));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
