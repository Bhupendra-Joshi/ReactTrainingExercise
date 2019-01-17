import {
    data,
    ACTION_TYPES
} from '../../constants'

export const cartReducer = (cart = data.cart, action) => {
    switch (action.type) {

        case ACTION_TYPES.ACTION_TYPE_ADD_TO_CART:{
            let product = cart[action.product.id];
            if(product){
                product.quantity += 1;
            }else{
                cart[action.product.id] = {...action.product, quantity : 1}
            }
            return {...cart}

        }

        // case ACTION_TYPES.ACTION_TYPE_INCREASE_QUANTITY:{
        //     const products =  state.cart.map(product => {
        //         if(product.id === action.product.id){
        //             return {...product, quantity : product.quantity - 1}
        //         }
        //         return product
        //     });
        //     return  {
        //         ...state,
        //         products
        //     };
        // }

        // case ACTION_TYPES.ACTION_TYPE_REMOVE_FROM_CART:{
        //     return state;
        // }

        // case ACTION_TYPES.ACTION_TYPE_DECREASE_QUANTITY:{
        //     const products =  state.cart.map(product => {
        //         if(product.id === action.product.id){
        //             return {...product, quantity : product.quantity - 1}
        //         }
        //         return product
        //     });
        //     return  {
        //         ...state,
        //         products
        //     };
        // }

        default:
        console.log( "CART NEW STATE : ", cart)
        return cart;
    }

}