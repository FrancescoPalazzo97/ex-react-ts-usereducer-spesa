import { useState } from "react";
import type { Cart, UseCartReturnType } from "../types";

export const useCart = (): UseCartReturnType => {
    const [cart, setCart] = useState<Cart>([]);

    const isInCart = (product: Cart[0]) => {
        return cart.some((p) => p.name === product.name);
    }

    const addToCart = (product: Cart[0]) => {
        if (isInCart(product)) return;
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }

    return [cart, setCart, addToCart, isInCart];
}