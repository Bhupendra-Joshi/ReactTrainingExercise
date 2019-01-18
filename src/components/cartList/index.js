import React, {Component} from 'react';
import CartItemContainer from '../cartItem';
import { connect } from 'react-redux';
import '../../index.css'
class CartList extends Component{

    render(){
        return(
            <div className="cartList">
                Your Cart
                {Object.keys(this.props.cart).map( key =>
                    <CartItemContainer product = {this.props.cart[key]}/>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => state;

const CartListContainer = connect(mapStateToProps)(CartList);

export default CartListContainer;
