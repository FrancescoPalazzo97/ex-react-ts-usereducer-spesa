import { useGlobalContext } from "../hooks/useGlobalContext"
import type { Product } from "../types/Products"
import { ProductCard } from "./ProductCard"

export default function ProductList() {
    const { products } = useGlobalContext();

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-10 text-center">Lista Prodotti</h2>
            <ul className="flex flex-wrap gap-4 justify-center">
                {products.map((product: Product) => (
                    <li key={product.name}>
                        <ProductCard product={product} />
                    </li>
                ))}
            </ul>
        </div>
    )
}