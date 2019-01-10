import React, { Component } from 'react';
import AddToCartButton from '../addToCartButton';
import ProductInStockInfo from '../productInStockInfo';
import ProductFixedInfo from '../productFixedInfo';

class ProductDetailsTile extends Component {

    render() {
        return (
            <div className="productDetailsTile">
                <ProductFixedInfo /> <br />
                <ProductInStockInfo /> <br/>
                <AddToCartButton />
            </div>
        );
    };
}

export default ProductDetailsTile;