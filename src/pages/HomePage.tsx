import ProductList from "../components/ProductList";
import { CartComponent } from "../components/CartComponent";

export const HomePage = () => {
    return (
        <main>
            <div className="flex flex-col items-center px-10">
                <ProductList />
                <hr className='border-slate-700 w-full my-2' />
                <CartComponent />
            </div>
        </main>
    )
}
