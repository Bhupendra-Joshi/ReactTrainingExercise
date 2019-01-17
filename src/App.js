import React, { Component } from 'react';
import './App.css';
import ProductDetailsTile from './components/productDetailsTile';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log("APP DATA",this.props)
    return (
      <div className="App">
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
const AppContainer = connect(mapStateToProps)(App)

export default AppContainer;

