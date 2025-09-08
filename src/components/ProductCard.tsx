import type { Product } from '../types'

export const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className='border p-4 mb-4 rounded bg-slate-800'>
            <h3 className='text-lg font-semibold'>{product.name}</h3>
            <hr className='my-2 border-slate-700' />
            <p className='text-sm'>Prezzo: {product.price.toFixed(2)}€</p>
        </div>
    )
}