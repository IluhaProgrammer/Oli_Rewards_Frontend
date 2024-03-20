'use client'

import MainCatalog from "@/components/catalog/Catalog";
import HoverPad from "@/components/flight/HoverPad";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import cn from 'clsx'
import { useAppSelector } from "@/hook/useTypedSelector";

const Contact = () => {

    const {theme} =useAppSelector(state => state.theme)

    return <div className={cn({
        'bg-white': theme === 'white',
        'bg-block': theme === 'black'
    })} >
        <div className="ml-40 mr-40 mx:mr-20 mx:ml-20 hub:mr-5 hub:ml-5 px:ml-20 px:mr-20" >
            <Header/>
            <MainCatalog/>
            <div className="mt-28 relative" >
                    <div className="mb-28" >
                       <HoverPad/> 
                    </div>
                <div className="flex justify-between px:flex-col" >
                    <Image
                        src={'/pri.jpg'}
                        alt="Фото кубков"
                        width={700}
                        height={100}
                    />
                    <Image
                        src={'/pri2.jpg'}
                        alt="Фото кубков"
                        width={700}
                        height={100}
                    />
                    
                </div>
                <div className="mt-20" >
                    <div className="mb-5" >
                        <span className={cn("text-sm text-opacity-50", {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })} >Телефоны: +7 (909) 984-30-76</span>
                    </div>
                    <div className="mb-5" >
                        <span className={cn("text-sm text-opacity-50", {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })} >Email: oli23rewards@gmail.com</span>
                    </div>
                    <div className="mb-5" >
                        <span className={cn("text-sm text-opacity-50", {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })} >Режим работы: Пн. - Пт. 9:00 - 19:00</span>
                    </div>
                    <div className="mb-5" >
                        <span className={cn("text-sm text-opacity-50", {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })} >Выходные: Сб. - Вс.</span>
                    </div>
                    <div className="mb-5" >
                        <span className={cn("text-sm text-opacity-50", {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })} >Адрес: г.Москва, м.Марьино</span>
                    </div>
                    <div className="mb-5" >
                        <span className={cn("text-sm text-opacity-50    ", {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })} >ИНН: 772374707762</span>
                    </div>
                </div>
            </div>
        </div>
            <Footer/>
    </div>
}

export default Contact;