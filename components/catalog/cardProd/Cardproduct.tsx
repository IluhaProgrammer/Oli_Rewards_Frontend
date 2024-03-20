import { useActions } from "@/hook/useActions";
import { useCart } from "@/hook/useCart";
import { IProduct } from "@/types/product.types";
import { FC } from "react";
import {BsCheckLg} from 'react-icons/bs'
import {BsFillHeartFill} from 'react-icons/bs'
import cn from 'clsx'
import Image from 'next/image'
import { useprofile } from "@/hook/useProfile";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserService } from "@/services/auth/user.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hook/useTypedSelector";

interface ICard {
    card : IProduct
}

const Cardproduct : FC<ICard> = ({card}) => {

    const {profile} = useprofile()

    const {theme} = useAppSelector(state => state.theme)

    const {push} = useRouter()

    const queryCache = useQueryClient()

    const {mutate} = useMutation(['toggle favorite'], () => UserService.toggleFavorites(card.id), {
        onSuccess: () => queryCache.invalidateQueries(['get profile'])
    })

    const isExist = profile && profile.favorites.some(item => item.id === card.id)

    return <div className={cn("flex flex-col justify-end border-0.1 relative rounded-2xl hover:-translate-y-2 duration-200 ease-in-out", {
        'border-white border-opacity-30 ': theme === 'black',
        'border-block border-opacity-10': theme === 'white'
    })} >
        <div className="flex flex-col items-center rounded-xl" >
                        <button className={cn("text-3xl absolute justify-start left-4 top-6 duration-200 ease-in-out hover:text-red-600")} onClick={() => mutate()}>{

                            isExist 
                            
                            ? <span className="text-red-600" ><BsFillHeartFill/></span>
                            
                            : <span className={cn({
                                'text-white': theme === 'black',
                                'text-block text-opacity-10': theme === 'white'
                            })} ><BsFillHeartFill/></span>

                        }</button>
                        <Link href={`/product/${card.id}`} >
                        <Image
                            src={card.images[0]}    
                            alt="Фото"
                            className=" rounded-xl pt-5 mb-5"
                            width={175}
                            height={100}
                        /></Link>
            
        </div>
        <button className={cn(" text-xl font-semibold text-center hover:text-fiolet duration-300 ease-in-out", {
            'text-white': theme === 'black',
            'text-block': theme === 'white'
        })} onClick={() => push(`/product/${card.id}`)}>
            <span>{card.name}</span>
        </button>
            <div className="flex mt-2 justify-center" >
                <span className="text-lowLime text-xl" ><BsCheckLg/></span>
                <span className={cn("ml-2 opacity-80", {
                    'text-white': theme === 'black',
                    'text-block': theme === 'white'
                })} >В наличии</span>
                    <div className={cn("text-sm opacity-80 ml-8", {
                        'text-white text-opacity-50': theme === 'black',
                        'text-block text-opacity-50': theme === 'white'
                    })} >
                        <span>Арт: {card.slug}</span>
                    </div>
            </div>
            
        <div className="text-lowLime text-xl text-center px-3 py-8 font-semibold" >
            {card.price}р.
        </div>
    </div>

}

export default Cardproduct;