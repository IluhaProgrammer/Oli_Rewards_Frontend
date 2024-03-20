'use client'

import CartItem from "@/components/catalog/CartProdItem";
import MainCatalog from "@/components/catalog/Catalog";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import SideBar from "@/components/sideBars/SideBar";
import CatalogName from "@/components/ui/CatalogName";
import { useCart } from "@/hook/useCart";
import { useprofile } from "@/hook/useProfile";
import { useAppDispatch, useAppSelector } from "@/hook/useTypedSelector";
import { resetCart } from "@/store/cart/cart.slice";
import Link from "next/link";
import cn from 'clsx'
import { useState } from "react";
import OrderForm from "@/components/forms/OrderForm";

const Cart = () => {

    const {visible} = useAppSelector(state => state.cart)

    const {total} = useCart()

    const {profile} = useprofile()

    const {items} = useCart()

    const dispatch = useAppDispatch()

    const {theme} = useAppSelector(state => state.theme)

    return <div className={cn({
        'bg-white': theme === 'white',
        'bg-block': theme === 'black'
    })} >
        <div className="ml-40 mr-40 mx:mr-20 mx:ml-20 hub:mr-5 hub:ml-5 px:ml-20 px:mr-20" >
            <Header/>
            <MainCatalog/>
            <div className="mt-28 " >
                <CatalogName name="Корзина" />
                {
                    !profile 
                    
                    ?<Link href={'/login'} className="text-blue text-xl flex justify-center mt-5">Авторизоваться</Link>
                    
                    :items.length < 1

                    ? <div className={cn("mt-10 text-2xl text-center", {
                        'text-block': theme === 'white',
                        'text-white': theme === 'black',
                    })} >
                        Корзина пуста :(
                    </div>

                    : <div className="mt-10 flex justify-between tel2:flex-col" >
                        <div>
                    <button className="text-red-600 text-sm hover:opacity-95" onClick={() => dispatch(resetCart())} >Очистить корзину</button>
                    <div className=" flex flex-col mt-2" >
                        {items.map(item => {
                            return <CartItem key={item.id} item={item} />
                        })}
                    </div>
                        </div>
                    <div className="mt-8 ml-10 tel2:m-auto tel2:mt-8" >
                            <SideBar  />
                        
                        {
                            visible && <OrderForm totalPrice={total} cardProducts={items} />
                        }
                    </div>
                </div>
                }
                
            </div>
        </div>
        <Footer/>
    </div>
}

export default Cart;