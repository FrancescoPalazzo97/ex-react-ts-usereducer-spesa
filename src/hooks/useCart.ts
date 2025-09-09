import { useState } from "react";
import type { Cart, UseCartReturnType, Product, cartProduct } from "../types";

export const useCart = (): UseCartReturnType => {
    const [cart, setCart] = useState<Cart>([]);

    const isInCart = (product: Product) => {
        return cart.some((p) => p.name === product.name);
    }

    const addToCart = (product: Product) => {
        if (isInCart(product)) return;
        const item: cartProduct = { ...product, quantity: 1 };
        setCart((prevCart) => [...prevCart, item]);
    }

    return [cart, setCart, addToCart, isInCart];
}