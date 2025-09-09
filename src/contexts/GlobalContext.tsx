import { createContext } from "react";
import type { GlobalContextType, Products } from "../types";
import { useCart } from "../hooks/useCart";

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, addToCart, removeFromCart, updateQuantity] = useCart();
    const cartData = { cart, addToCart, removeFromCart, updateQuantity };

    const products: Products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];

    const value: GlobalContextType = {
        products,
        cartData
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};