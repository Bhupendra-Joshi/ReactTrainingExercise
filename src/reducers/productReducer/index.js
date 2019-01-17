import {
    data,
    ACTION_TYPES
} from '../../constants';

export const productReducer = (state = data.products, action) => {
    console.log(action.type, action.product)
    switch (action.type) {
        case ACTION_TYPES.ACTION_TYPE_ADD_TO_CART:
            {
                const products = state.map(product => {
                    if (product.id === action.product.id) {
                        return { ...product,
                            quantity: product.quantity - 1
                        }
                    }
                    return product
                });
                return products;
            }

            // case ACTION_TYPES.ACTION_TYPE_INCREASE_QUANTITY:
            //     {
            //         const products = state.products.map(product => {
            //             if (product.id === action.product.id) {
            //                 return { ...product,
            //                     quantity: product.quantity + 1
            //                 }
            //             }
            //             return product
            //         });
            //         return {
            //             ...state,
            //             products
            //         };
            //     }
            // case ACTION_TYPES.ACTION_TYPE_REMOVE_FROM_CART:
            //     {

            //         return state;
            //     }
            // case ACTION_TYPES.ACTION_TYPE_DECREASE_QUANTITY:
            //     {
            //         const products = state.products.map(product => {
            //             if (product.id === action.product.id) {
            //                 return { ...product,
            //                     quantity: product.quantity - 1
            //                 }
            //             }
            //             return product
            //         });
            //         return {
            //             ...state,
            //             products
            //         };
            //     }
        default:
            return state;
    }
}