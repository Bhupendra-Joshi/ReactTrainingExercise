import React, { Component } from 'react';
import '../../index.css';

class ProductInStockInfo extends Component {
    render() {
        return (
            <div className = "productInStock productDetailsMargin ">
                In Stock({this.props.product.quantity})
            </div>
        );
    };
}

export default ProductInStockInfo;