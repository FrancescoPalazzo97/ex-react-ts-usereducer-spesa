import type { cartProduct } from "../../../types"

type InputQuantityProps = {
    updateQuantity: (product: cartProduct, value?: number, isAbsolute?: boolean) => void;
    product: cartProduct;
}

export const InputQuantity = ({ product, updateQuantity }: InputQuantityProps) => {

    return (
        <input
            type="number"
            min="1"
            value={isNaN(product.quantity) ? 1 : product.quantity}
            onChange={e => updateQuantity(product, parseInt(e.target.value), true)}
            className="w-2/3 px-2 py-1 mt-1 text-center bg-slate-700 border border-slate-600 rounded text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
        />
    )
}
