import React, { Component } from 'react';
import '../../index.css';

class ProductInStockInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 10
        };
    }

    render() {
        return (
            <div className = "productInStock productDetailsMargin ">
                In Stock({this.state.quantity})
            </div>
        );
    };
}

export default ProductInStockInfo;