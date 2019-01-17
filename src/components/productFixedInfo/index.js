import React, { Component } from 'react';
import '../../index.css';
import { connect } from 'react-redux';

class ProductFixedInfo extends Component {
      render() {
        return (
            <div className="productFixedInfo">
                <img alt=""
                    className="productImageTile"
                    src={this.props.product.image} /><br />
                <div className="productDetailsMargin productDetailsFont">
                    {this.props.product.name} <br />
                    ${this.props.product.price.toFixed(2)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state;
const ProductFixedInfoContainer = connect(mapStateToProps)(ProductFixedInfo)

export default ProductFixedInfoContainer