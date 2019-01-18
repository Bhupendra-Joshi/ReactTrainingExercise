import React, { Component } from 'react';
import '../../index.css';
import ProductDetailsTile from '../productDetailsTile';
import { connect } from 'react-redux';

class ProductList extends Component {
  render() {
    console.log("APP DATA",this.props)
    return (
      <div className="productList">
        {
          this.props.products.map(product =>
            <ProductDetailsTile product = {product} key = {product.id}/>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => state
const ProductListContainer = connect(mapStateToProps)(ProductList)

export default ProductListContainer;

