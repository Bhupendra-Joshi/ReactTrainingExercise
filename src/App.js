import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import ProductListContainer from './components/productList';
import CartListContainer from './components/cartList';

class App extends Component {
  render() {
    console.log("APP DATA",this.props)
    return (
      <div className="App">
        <ProductListContainer className="inner"/>
        <CartListContainer className="inner"/>
      </div>
    );
  }
}

const mapStateToProps = state => state
const AppContainer = connect(mapStateToProps)(App)

export default AppContainer;

