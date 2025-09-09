import type { Product } from './';

export type cartProduct = Product & { quantity: number };

export type Cart = cartProduct[];

export type UseCartReturnType = [
    Cart,
    (product: Product) => void,
    (product: cartProduct) => void,
    (product: Product | cartProduct, value?: number, isAbsolute?: boolean) => void
];

export type CartData = {
    cart: Cart;
    addToCart: (product: Product) => void;
    removeFromCart: (product: cartProduct) => void;
    updateQuantity: (product: Product | cartProduct, value?: number, isAbsolute?: boolean) => void;
}