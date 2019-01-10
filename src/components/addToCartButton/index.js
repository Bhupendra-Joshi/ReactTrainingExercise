import React, { Component } from 'react';
import '../../index.css';

class AddToCartButton extends Component {

    render() {
        return (
            <div>
                <button className="addToCartButton" onClick={addToCart}>Add to cart</button>
            </div>
        );
    };
}

const addToCart = () => {
    console.log("Add To cart called");
}

export default AddToCartButton;