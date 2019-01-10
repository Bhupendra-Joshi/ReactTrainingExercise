import React, { Component } from 'react';
import './App.css';
import ProductDetailsTile from './components/productDetailsTile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductDetailsTile/>
      </div>
    );
  }
}

export default App;
