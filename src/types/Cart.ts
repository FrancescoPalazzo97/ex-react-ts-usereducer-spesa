import type { Product } from './';

export type cartProduct = Product & { quantity: number };

export type Cart = cartProduct[];

export type UseCartReturnType = [
    Cart,
    React.Dispatch<React.SetStateAction<Cart>>,
    (product: Cart[0]) => void,
    (product: Cart[0]) => boolean
];

export type CartData = {
    cart: Cart;
    setCart: React.Dispatch<React.SetStateAction<Cart>>;
    addToCart: (product: Product) => void;
    isInCart: (product: Product) => boolean;
}