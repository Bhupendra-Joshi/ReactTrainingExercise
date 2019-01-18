import {
    data,
    ACTION_TYPES
} from '../../constants';

export const productReducer = (products = data.products, action) => {
    console.log(action.type, action.product)
    switch (action.type) {
        case ACTION_TYPES.ACTION_TYPE_ADD_TO_CART:
            {
                const newProducts = products.map(product => {
                    if (product.id === action.product.id) {
                        return { ...product,
                            quantity: product.quantity - 1
                        }
                    }
                    return product
                });
                return newProducts;
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
        case ACTION_TYPES.ACTION_TYPE_REMOVE_FROM_CART:
            {
                const newProducts = products.map(
                    product => {
                        if(product.id === action.product.id){
                            return {
                                ...product,
                                quantity : product.quantity + action.itemsInCart}
                        }
                        return product
                    }
                )
                return newProducts;
            }
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
            return products;
    }
}