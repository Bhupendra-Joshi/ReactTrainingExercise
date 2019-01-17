import React, { Component } from 'react';
import AddToCartButton from '../addToCartButton';
import ProductInStockInfo from '../productInStockInfo';
import ProductFixedInfo from '../productFixedInfo';
import { connect } from 'react-redux';

class ProductDetailsTile extends Component {

    render() {
        return (
            <div className="productDetailsTile">
                <ProductFixedInfo product = {this.props.product}/> <br />
                <ProductInStockInfo product = {this.props.product}/> <br />
                <AddToCartButton product = {this.props.product}/>
            </div>
        );
    };
}

const mapStateToProps = state => state;
const ProductDetailsTileContainer = connect(mapStateToProps)(ProductDetailsTile)

export default ProductDetailsTileContainer;
