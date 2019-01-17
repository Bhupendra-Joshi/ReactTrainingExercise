import React, { Component } from 'react';
import { ACTION_TYPES } from "../../constants";
import '../../index.css';
import { connect  } from 'react-redux';

class AddToCartButton extends Component {

    addToCart = (isProductAlreadynTheCart) => {
        if(!this.isProductAlreadyInTheCart() && this.props.product.quantity > 0){
            this.props.dispatch({
                type : ACTION_TYPES.ACTION_TYPE_ADD_TO_CART,
                product : this.props.product
            });
        }
    }
    render() {
        return (
            <div>
                <button
                    className= {'addToCartButton '.concat( this.isProductAlreadyInTheCart() ? 'addToCartButtonDisabled' : 'addToCartButtonEnabled')}
                    onClick={this.addToCart}
                    >
                    Add to cart
                </button>
            </div>
        );
    };

    isProductAlreadyInTheCart = () => {
        for(let i = 0; i < this.props.cart.length; i++){
            if(this.props.cart[i].id === this.props.product.id){
                return true;
            }
        }
        return false;
    };
}

const mapStateToProps = state => state;

const AppToCartButtonContainer =  connect(mapStateToProps)(AddToCartButton);

export default AppToCartButtonContainer;