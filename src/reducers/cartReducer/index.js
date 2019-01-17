import {
    data,
    ACTION_TYPES
} from '../../constants'

export const cartReducer = (state = data.cart, action) => {
    switch (action.type) {

        case ACTION_TYPES.ACTION_TYPE_ADD_TO_CART:{
            let productExistsInCart = false;
            let products =  state.map(product => {
                if(product.id === action.product.id){
                    productExistsInCart = true;
                    return {...product, quantity : product.quantity + 1}
                }
                return product
            })
            if(!productExistsInCart){
                products = [...state, {...action.product, quantity : 1}]
            }
            return products;
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
        console.log( "CART NEW STATE : ", state)
        return state;
    }

}