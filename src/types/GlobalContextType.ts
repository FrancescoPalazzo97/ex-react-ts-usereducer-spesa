import type { Products, UseCartReturnType } from "./";

export type GlobalContextType = {
    products: Products;
    cartData: UseCartReturnType;
}