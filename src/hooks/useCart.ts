import { useReducer } from "react";
import type { Cart, UseCartReturnType, Product, cartProduct } from "../types";

export const useCart = (): UseCartReturnType => {
    const initalCart: Cart = [];

    type CartActionType =
        | { type: 'ADD_TO_CART'; payload: Product }
        | { type: 'REMOVE_FROM_CART'; payload: cartProduct }
        | { type: 'UPDATE_QUANTITY'; payload: { product: Product | cartProduct, value: number, isAbsolute: boolean } };

    const cartReducer = (state: Cart, action: CartActionType): Cart => {

        switch (action.type) {
            case 'ADD_TO_CART':
                const item: cartProduct = { ...action.payload, quantity: 1 };
                return [...state, item];
            case 'REMOVE_FROM_CART':
                return state.filter(p => p.name !== (action.payload as cartProduct).name);
            case 'UPDATE_QUANTITY':
                return state.map(p => {
                    if (p.name === action.payload.product.name) {
                        return {
                            ...p,
                            quantity: action.payload.isAbsolute
                                ? isNaN(action.payload.value) ? 1 : action.payload.value
                                : p.quantity + action.payload.value
                        };
                    }
                    return p;
                });
            default:
                return state;
        }
    }
    const [cart, dispatchCart] = useReducer(cartReducer, initalCart);

    const isInCart = (product: Product) => cart.some(p => p.name === product.name);

    const updateQuantity = (product: Product | cartProduct, value: number = 1, isAbsolute: boolean = false) => {
        dispatchCart({ type: 'UPDATE_QUANTITY', payload: { product, value, isAbsolute } })
    };

    const addToCart = (product: Product) => {
        if (isInCart(product)) {
            updateQuantity(product);
            return
        }
        dispatchCart({ type: 'ADD_TO_CART', payload: product })
    }

    const removeFromCart = (product: cartProduct) => {
        dispatchCart({ type: 'REMOVE_FROM_CART', payload: product })
    }

    return [cart, addToCart, removeFromCart, updateQuantity];
}