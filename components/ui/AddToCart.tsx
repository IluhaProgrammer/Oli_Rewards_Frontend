import { useActions } from "@/hook/useActions";
import { useCart } from "@/hook/useCart";
import { useprofile } from "@/hook/useProfile";
import { useAppDispatch } from "@/hook/useTypedSelector";
import { UserService } from "@/services/auth/user.service";
import { IProduct } from "@/types/product.types";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import cn from 'clsx'
import AuthPad from "./authPad";

const AddToCart : FC<{product : IProduct, color : string, text : string, script : string}> = ({product, color, text, script}) => {

    const {profile} = useprofile()

    const {addToCart} = useActions()

    const dispatch = useAppDispatch()

    return (
        <>
            <button disabled={profile ? false : true}  className={cn("text-white bg-fiolet text-2xl px-10 py-4 rounded-full hover:opacity-50 duration-100 ease-in-out", {
                'opacity-50': !profile 
            })} onClick={() => dispatch(addToCart({product, price: product.price, color, text, script, quantity: 1, name: product.name}))} >
                В корзину
            </button>
            {
                !profile

                ? <AuthPad/>

                : null
            }
        </>
    )
}

export default AddToCart;