import { useActions } from "@/hook/useActions";
import { ICartItem } from "@/types/cartitem.types";
import Image from "next/image";
import { FC } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {TbTrash} from 'react-icons/tb'
import cn from 'clsx'
import { useCart } from "@/hook/useCart";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/hook/useTypedSelector";

interface IColors {
    white : string
    silver: string
    gold: string
    blue: string
    diamond: string
    yellow: string
    laim: string
    black: string
}

const colors : any = {
    white: 'белый',
    silver: 'серебро',
    gold: 'золото',
    blue: 'синий',
    diamond: 'брюл',
    yellow: 'желтый',
    laim: 'лайм',
    black: 'черный'
}

const CartItem : FC<{item : ICartItem}> = ({item}) => {

    const {removeFromCart,changeQuantity} = useActions()

    const {theme} = useAppSelector(state => state.theme)

    return <div className={cn("border p-1 max-[1280px]:p-3", {
        'border-white border-opacity-50': theme === 'black',
        'border-block border-opacity-10': theme === 'white'
    })} >
        <div className={cn("rounded-sm p-3 m-5 font-semibold text-opacity-60", {
            'bg-white text-block bg-opacity-70': theme ==='black',
            'bg-block bg-opacity-20 text-block': theme === 'white'  
        })} >
            Доставка СДЭК/Почта России/курьер
        </div>
        <div className="m-5 grid grid-cols-4 gap-10 items-center mx:flex mx:flex-col">
            <div>
                <Image
                    src={item.product?.images[0]}
                    alt="Фото продукта"
                    width={75}
                    height={50}
                    className=' rounded-sm'
                />
            </div>
            <div className="flex flex-col items-start">
                <span className={cn("font-semibold text-sm", {
                    'text-block': theme === 'white',
                    'text-white': theme === 'black'
                })} >{item.name}, арт. {item.product?.slug}, {colors[item?.color]}</span>
                <span className={cn("opacity-50 mt-3 text-xs", {
                    'text-block': theme === 'white',
                    'text-white': theme === 'black'
                })}>{item?.text ? item?.text : '___'}/{item.script}</span>
                <button onClick={() => removeFromCart({slug : item.product.slug, text : item.text})} className={cn("text-block font-semibold scale-150  p-1 rounded-md mt-5 hover:opacity-70 duration-150 ease-in-out ml-1", {
                    'bg-white bg-opacity-70': theme === 'black',
                    'bg-block bg-opacity-20': theme === 'white'
                } )} ><TbTrash/></button>
            </div>
            <div>
                <span className={cn(" text-opacity-70 font-medium text-lg", {
                    'text-block text-opacity-60': theme === 'white',
                    'text-white': theme === 'black'
                })} >{item.price * item.quantity} Pуб.</span>
            </div>
            <div className="flex items-center"> 
                <button disabled={item.quantity === 1 ? true : false} onClick={() => changeQuantity({slug: item.product.slug, type: 'minus', text: item.text})} className={cn("text-3xl mr-3   rounded-md p-1hover:opacity-70 duration-150 ease-in-out", {
                    'disabled:opacity-20': item.quantity === 1,
                    'text-white bg-white bg-opacity-50': theme === 'black',
                    'text-block text-opacity-40 bg-block bg-opacity-20': theme === 'white'
                })}><AiOutlineMinus/></button>
                <span className={cn(" border-2 border-opacity-70 px-5 py-1 rounded-md justify-center text-center hover:border-blue duration-150 ease-in-out ", {
                    'text-block border-block border-opacity-10': theme === 'white',
                    'text-white border-white': theme === 'black'
                })}>{item.quantity}</span>
                <button disabled={item.quantity === 299 ? true : false} onClick={() => changeQuantity({slug: item.product.slug, type: 'plus', text: item.text})} className={cn("text-xl ml-3   rounded-md p-1 hover:opacity-70 duration-150 ease-in-out", {
                    'disabled:opacity-20': item.quantity === 299,
                    'text-block text-opacity-40 bg-block bg-opacity-20': theme === 'white',
                    'text-white bg-white bg-opacity-50': theme === 'black'
                })} ><AiOutlinePlus/></button>
            </div>
        </div>
    </div>
}

export default CartItem;