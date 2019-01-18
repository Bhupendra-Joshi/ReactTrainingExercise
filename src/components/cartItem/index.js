import React, {Component} from 'react';
import {connect} from 'react-redux';

class CartItem extends Component{

    render(){
        return(
            <div>
                <div>{this.props.product.name}</div>
                <div className= "cartItem">
                    <span Style="flex:1">${this.props.product.price.toFixed(2)}</span>
                    x 
                    <span Style="flex:2">
                        <button className = "changeQuantity">-</button>
                        {this.props.product.quantity}
                        <button className = "changeQuantity">+</button>
                    </span>
                    
                    <span Style="flex:2">
                        ${(this.props.product.quantity * this.props.product.price).toFixed(2)}
                        <button className = "totalCost">X</button>
                    </span>
                    
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => state;

const CartItemContainer = connect(mapStateToProps)(CartItem);

export default CartItemContainer;