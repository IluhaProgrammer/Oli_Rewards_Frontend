import { useCart } from "@/hook/useCart";
import { useAppDispatch, useAppSelector } from "@/hook/useTypedSelector";
import { setVisible } from "@/store/cart/cart.slice";
import cn from 'clsx'

const SideBar = () => {

    const {visible} = useAppSelector(state => state.cart)

    const dispath = useAppDispatch()

    const {items, total, totalQuantity} = useCart()

    const {theme} = useAppSelector(state => state.theme)

    return <div className={cn("p-5 border rounded-xl", {
            'border-white border-opacity-70': theme === 'black',
            'border-block border-opacity-10': theme === 'white'
    })} >
        <div>
            <button onClick={() => dispath(setVisible({visible}))} className="text-white bg-lime px-3 py-4 w-full rounded-xl font-fontsemibold hover:scale-95 duration-150 ease-in-out" >Перейти к оформлению</button>
        </div>
        <div className="mt-2 mb-5" >
            <span className={cn(" text-sm text-opacity-70", {
                'text-block text-opacity-50': theme === 'white',
                'text-white': theme === 'black'
            })} >Доступные способы оплаты можно посмотреть при оплате</span>
        </div>
        <div className={cn("border-t", {
            'border-t-white border-opacity-60': theme === 'black',
            'border-t-block border-opacity-40': theme === 'white'
        })} >
            <div className="mt-5 mb-5 flex justify-between items-center" >
               <span className={cn("text-xl font-semibold", {
                'text-block': theme === 'white',
                'text-white': theme === 'black'
               })} >Ваша корзина:</span>
               <span className={cn(" text-opacity-70", {
                'text-block': theme === 'white',
                'text-white': theme === 'black'
               } )}>{totalQuantity} товаров</span>
            </div>
            <div className="flex justify-between" >
                <span className={cn("text-sm", {
                    'text-block': theme === 'white',
                    'text-white': theme === 'black'
                })} >Товары({totalQuantity})</span>
                <span className={cn({
                    'text-block': theme === 'white',
                    'text-white': theme === 'black'
                })} >{total} руб.</span>
            </div>
        </div>
        <div className={cn("border-t mt-5", {
            'border-t-white border-opacity-60': theme === 'black',
            'border-t-block border-opacity-40': theme === 'white'
        })} >
            <div className="flex justify-between mt-5 items-center" >
                <span className={cn("font-semibold text-xl", {
                    'text-block': theme === 'white',
                    'text-white': theme === 'black'
                } )}>К оплате</span>
                <span className={cn(" text-opacity-70 text-sm", {
                    'text-block': theme === 'white',
                    'text-white': theme === 'black'
                })} >{total} руб</span>
            </div>
        </div>
    </div>
}

export default SideBar;