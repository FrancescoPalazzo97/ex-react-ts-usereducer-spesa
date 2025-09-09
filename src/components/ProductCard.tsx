import type { Product, cartProduct } from '../types'
import { DefaultButton } from './UI/buttons/DefaultButton'
import { useGlobalContext } from '../hooks/useGlobalContext'

type ProductCardProps = {
    product: Product | cartProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const { cartData } = useGlobalContext();
    const { addToCart } = cartData;

    return (
        <div className='flex flex-col items-center border p-4 mb-4 rounded bg-slate-800 max-w-[200px]'>
            <h3 className='text-lg font-semibold'>{product.name}</h3>
            <hr className='border-slate-700 w-full my-2' />
            <p className='text-sm mb-2'>Prezzo: {product.price.toFixed(2)}€</p>
            {'quantity' in product
                ? (
                    <p className='text-sm'>Quantità: {product.quantity}</p>
                ) : (
                    <DefaultButton
                        text='Aggiungi al carrello'
                        onClick={() => addToCart(product)}
                    />
                )}
        </div>
    )
}