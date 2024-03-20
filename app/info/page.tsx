'use client'

import MainCatalog from "@/components/catalog/Catalog";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import CatalogName from "@/components/ui/CatalogName";
import Image from "next/image";
import {HiOutlineTrophy} from 'react-icons/hi2'
import {FaMedal} from 'react-icons/fa6'
import {GiLaurelsTrophy} from 'react-icons/gi'
import { useAppSelector } from "@/hook/useTypedSelector";
import cn from 'clsx'

const Info = () => {

    const {theme} = useAppSelector(state => state.theme)

    return <div className={cn({
        'bg-white': theme === 'white',
        'bg-block': theme === 'black'
    })} >
    <div className="ml-40 mr-40 mx:mr-20 mx:ml-20 hub:mr-5 hub:ml-5 px:ml-20 px:mr-20" >
        <Header/>
        <MainCatalog/>
        <div className="mt-28 flex justify-between mx:flex-col px:flex-col flex-col" >   
        <div className="text-center mb-5" >
            <CatalogName name="Информация" />
        </div>
            
            <div className=" max-[1280px]:ml-20" >
                <div className="mt-10 text-lg text-center" >
                    <p className={cn('text-opacity-50',{
                        'text-white': theme === 'black',
                        'text-block': theme === 'white'
                    })} >Добро пожаловать в наш интернет-магазин! <p/>Мы рады приветствовать вас на страницах нашего небольшого, но уютного онлайн-магазина. <p/> Здесь вы найдете большое количество различных наград и медалей. 
                    </p>
                </div>
                <div className=" text-fiolet text-3xl mt-16 text-center" >
                    <span>У нас Вы можете приобрести</span>
                </div>
                <div className="flex justify-between mt-10" >
                    <div className="flex justify-center flex-col" >
                            <div className="flex justify-center" >
                        <span className="text-fiolet text-8xl" ><HiOutlineTrophy/></span>
                            </div>
                        <div className="text-xl text-center mt-2" >
                            <span className={cn('font-semibold',{
                                'text-white': theme === 'black',
                                'text-block': theme === 'white'
                            })} >Кубки</span>
                        </div>
                        <div className={cn("text-center mt-3", {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        } )}>
                            <span className={cn('text-opacity-50',{
                                'text-white': theme === 'black',
                                'text-block': theme === 'white'
                            })}>От недорогих,<p/> до эксклюзивных</span>
                        </div>
                    </div>
                    <div className="flex justify-center flex-col" >
                            <div className="flex justify-center" >
                        <span className="text-fiolet text-8xl" ><FaMedal/></span>
                            </div>
                        <div className="text-xl text-center mt-2" >
                            <span className={cn({
                                'text-white': theme === 'black',
                                'text-block': theme === 'white'
                            })} >Медали</span>
                        </div>
                        <div className={cn("text-center mt-3 text-opacity-50", {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })} >
                            <span className="">Для награждения спортсменов <p/> и участников</span>
                        </div>
                    </div>
                    <div className="flex justify-center flex-col" >
                            <div className="flex justify-center" >
                        <span className="text-fiolet text-8xl" ><GiLaurelsTrophy/></span>
                            </div>
                        <div className={cn("text-xl text-center mt-2", {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })} >
                            <span className="" >Призы</span>
                        </div>
                        <div className={cn("text-center mt-3 text-opacity-50", {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })} >
                            <span className="">Выбор кубков со своей <p/> гравировкой</span>
                        </div>
                    </div>
                </div>
                <div className={cn("mt-20 mb-10 text-opacity-50", {
                    'text-white': theme === 'black',
                    'text-block': theme === 'white'
                })} >
                    <p>Благодаря наличию небольшого склада, мы можем в кратчайшие сроки сделать гравировку и доставить кубок до покупателя. Все посылки будут доставляться либо через Почту России, либо через СДЭК, это самые популярные способы доставки и самые дешевые</p>
                </div>
                <div className=" border-t-4 border-t-fiolet pt-10 pb-10" >
                    <div className="flex" >
                        <div>
                            <Image
                                src={'/phoo.jpg'}
                                alt="Фото"
                                width={450}
                                height={100}
                            />
                        </div>
                        <div>
                        <div  className={cn("text-3xl ml-14", {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })}>
                            <span>Собственная студия <p/> гравировки продукции</span>
                        </div>
                        <div className={cn("text-lg ml-14 mt-10 text-opacity-50", {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })} >
                            <span className="" >Производство, оборудованное станками нового поколения, <p/> позволяет делать различные гравировки практически любых сложностей, цветов и шрифтов.</span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className={cn(" border-t-4 text-opacity-50 border-t-fiolet pt-10",{
                    'text-white': theme === 'black',
                    'text-block': theme === 'white'
                })} >
                    <div >
                        <span>Благодаря собвственной студии для производства и гравировки наград для наших заказчиков, мы можем производить нескольких десятков кубков в <p/> день. Благодаря этим параметрам, мы можем делать несколько десятков людей в мире намног осчастливее!!!</span>
                    </div>
                    <div className="mt-12" >
                        <Image
                            src={'/avat.jpg'}
                            alt="Фото"
                            width={1300}
                            height={450}
                        />
                    </div>
                </div>
            </div>
        </div>
        </div>
    <Footer/>
    </div>
}

export default Info;