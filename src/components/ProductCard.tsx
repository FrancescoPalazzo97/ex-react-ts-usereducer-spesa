import type { Product, cartProduct } from '../types';
import { DefaultButton } from './UI/buttons/DefaultButton';
import { useGlobalContext } from '../hooks/useGlobalContext';
import { InputQuantity } from './UI/inputs/InputQuantity';

type ProductCardProps = {
    product: Product | cartProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const { cartData } = useGlobalContext();
    const { addToCart, removeFromCart, updateQuantity } = cartData;

    return (
        <div className='flex flex-col items-center border p-4 mb-4 rounded bg-slate-800 max-w-[200px] relative'>
            <h3 className='text-lg font-semibold'>{product.name}</h3>
            <hr className='border-slate-700 w-full my-2' />
            <p className='text-sm mb-2'>Prezzo: {product.price.toFixed(2)}€</p>
            {'quantity' in product
                ? (
                    <>
                        <p className='text-sm'>Quantità:</p>
                        <InputQuantity
                            updateQuantity={updateQuantity}
                            product={product}
                        />
                        <DefaultButton
                            text={<i className="fa-solid fa-xmark"></i>}
                            className='absolute top-2 right-2 w-6 h-6 flex items-center justify-center p-0 text-white hover:text-red-500'
                            onClick={() => removeFromCart(product)}
                        />
                    </>
                ) : (
                    <DefaultButton
                        text='Aggiungi al carrello'
                        className='bg-emerald-500 hover:bg-emerald-600 text-white'
                        onClick={() => addToCart(product)}
                    />
                )}
        </div>
    )
}