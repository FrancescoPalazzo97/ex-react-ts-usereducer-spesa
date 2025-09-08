import type { Product, cartProduct } from '../types'

type ProductCardProps = {
    product: Product | cartProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className='flex flex-col items-center border p-4 mb-4 rounded bg-slate-800 max-w-[200px]'>
            <h3 className='text-lg font-semibold'>{product.name}</h3>
            <hr className='border-slate-700 w-full my-2' />
            <p className='text-sm mb-2'>Prezzo: {product.price.toFixed(2)}€</p>
            {'quantity' in product
                ? (
                    <p className='text-sm'>Quantità: {product.quantity}</p>
                ) : (
                    <button
                        className='bg-emerald-500 text-white py-1 px-2 rounded mt-2 hover:bg-emerald-600 transition-colors'
                        onClick={() => { }}
                    >
                        Aggiungi al carrello
                    </button>
                )}
        </div>
    )
}