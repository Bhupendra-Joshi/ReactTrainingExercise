import React, { Component } from 'react'
import '../../index.css'

class ProductFixedInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                "id": "91c9f4a3-18e9-4263-8cd6-c649dabd7e51",
                "name": "Sauce - Hoisin",
                "quantity": 35,
                "image": "https://picsum.photos/200/200/?image=18",
                "price": 239
            }
        }
    }

    render() {
        return (
            <div className="productFixedInfo">
                <img alt=""
                    className="productImageTile"
                    src={this.state.product.image} /><br />
                <div className="productDetailsMargin">
                    {this.state.product.name} <br />
                    ${this.state.product.price.toFixed(2)}
                </div>
            </div>
        )
    }
}

export default ProductFixedInfo