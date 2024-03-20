'use client'

import MainCatalog from "@/components/catalog/Catalog";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import CatalogName from "@/components/ui/CatalogName";
import Image from "next/image";
import {TbTruckDelivery} from 'react-icons/tb'
import cn from 'clsx'
import { useAppSelector } from "@/hook/useTypedSelector";

const Pay = () => {

    const {theme} = useAppSelector(state => state.theme)

    return <div className={cn({
        'bg-white': theme === 'white',
        'bg-block': theme === 'black'
    })} >
    <div className="ml-40 mr-40 mx:mr-20 mx:ml-20 hub:mr-5 hub:ml-5 px:ml-20 px:mr-20" >
        <Header/>
        <MainCatalog/>
        <div className="mt-28 flex justify-between gal:flex-col" >
            <div className=" gal:flex gal:justify-center gal:flex-col gal:m-auto" >
            <CatalogName name="Оплата и доставка" />
            <Image
                className="mt-10"
                src={'/oplata.jpg'}
                alt="Здесь могла быть ваша реклама"
                width={330}
                height={200}
            />
            </div>
            <div className="px-6 py-6 mt-14" >
            <ul className=" list-none" >
                <li className="flex items-center" >
                    <Image
                        src={'/house.svg'}
                        alt="фото"
                        width={60}
                        height={60}
                    />
                    <span className={cn("ml-5 text-lg text-opacity-60", {
                        'text-white': theme === 'black',
                        'text-block': theme === 'white'
                    })} >Доставка осуществляется посредством служб доставки СДЭК и Почта России.</span>
                </li>
                <li className="flex items-center mt-8" >
                    <Image
                        src={'/car.svg'}
                        alt="фото"
                        width={60}
                        height={60}
                    />
                    <span className={cn("ml-5 text-lg text-opacity-60", {
                        'text-white': theme === 'black',
                        'text-block': theme === 'white'
                    })} >Возможна доставка курьером в пределах МКАДа</span>
                </li>
                <li className="flex items-center mt-8" >
                    <Image
                        src={'/world.svg'}
                        alt="фото"
                        width={60}
                        height={60}
                    />
                    <span className={cn("ml-5 text-lg text-opacity-60", {
                        'text-white': theme === 'black',
                        'text-block': theme === 'white'
                    })}>Доставка по всей России </span>
                </li>
            </ul>
            <div className="mt-10" >
                <p className={cn("text-lg", {
                        'text-white': theme === 'black',
                        'text-block': theme === 'white'
                    })} >Поставка осуществля­ется с помощью транспортн­ых компаний: СДЭК и Почта России</p>
            </div>
            <div className="mt-5" >
                <p className={cn("text-sm text-opacity-60", {
                        'text-white': theme === 'black',
                        'text-block': theme === 'white'
                    })} >После получения оплаты за заказ мы начинаем его сборку (около пары часов сборка заказа). Оплата доставки<p/> транспортн­ой компанией ложится на Вас. Представлены электронные адреса сайтов транспортных компаний, где<p/> можно уточнить стоимость доставки.</p>
                <p className={cn("text-sm mt-5", {
                        'text-white': theme === 'black',
                        'text-block': theme === 'white'
                    })} >Оплата возможна:</p>
            </div>
            <div className="flex items-center mt-8" >
                <Image
                    src={'/check.svg'}
                    alt='Фото'
                    width={60}
                    height={60}
                />
                <span className={cn("text-sm ml-5 text-opacity-60", {
                        'text-white': theme === 'black',
                        'text-block': theme === 'white'
                    } )}>По карте любых банков или наличными</span>
            </div>
            </div>
        </div>
    </div>
        <Footer/>
    </div>
}

export default Pay;