import { useGlobalContext } from "../hooks/useGlobalContext"
import type { cartProduct } from "../types"
import { ProductCard } from "./ProductCard"

export const CartComponent = () => {
    const { cartData } = useGlobalContext()

    const { cart } = cartData;

    return (
        <div className='p-8 flex flex-col items-center'>
            <h2 className='text-2xl font-bold mb-5'>Carrello</h2>
            {cart.length === 0
                ? <p>Il carrello è vuoto.</p>
                : (
                    <ul className="flex flex-wrap gap-4 justify-center">
                        {cart.map((product: cartProduct) => (
                            <li key={product.name}>
                                <ProductCard product={product} />
                            </li>
                        ))}
                    </ul>
                )}
        </div>
    )
}

