'use client'

import MainCatalog from "@/components/catalog/Catalog";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { useprofile } from "@/hook/useProfile";
import Link from "next/link";
import {RxAvatar} from 'react-icons/rx'
import {BiCommentDetail} from 'react-icons/bi'
import {BsFillBoxSeamFill} from 'react-icons/bs'
import {AiFillLike} from 'react-icons/ai'
import {AiFillCreditCard} from 'react-icons/ai'
import {TbTruckDelivery} from 'react-icons/tb'
import cn from 'clsx'
import { useAppSelector } from "@/hook/useTypedSelector";

const Profile = () => {

    const {profile} = useprofile()

    const {theme} = useAppSelector(state => state.theme)

    if(!profile) {
        return ''
    }

    return <div className={cn({
        'bg-white': theme === 'white',
        'bg-block': theme === 'black'
    })} >
        <div className="mr-40 ml-40 mx:mr-20 mx:ml-20 hub:mr-5 hub:ml-5 px:ml-20 px:mr-20" >
            <Header/>
            <MainCatalog/>
            <div className="mt-28 flex ph:flex-col mel:block" >
                <div>
                <div className="flex items-center" >
                    <span className={cn("text-9xl font-normal opacity-80", {
                        'text-block': theme === 'white',
                        'text-white': theme === 'black'
                    })} ><RxAvatar/></span>
                    <span className={cn("text-3xl ml-5", {
                        'text-block': theme === 'white',
                        'text-white': theme === 'black'
                    })} >{profile.name}</span>
                </div>
                <div className="mt-2" >
                    <span className={cn("text-xl", {
                        'text-block': theme === 'white',
                        'text-white': theme === 'black'
                    })} >{`Почта: ${profile.email}`}</span>
                </div>
                <div  className="mt-2">
                    <Link href='/profile/update'    className="text-blue" >Изменить профиль</Link>
                </div>
                <div className="mt-5 mb-2" >
                    <Link href={'/'}><span className="bg-cried text-block p-1 rounded-sm" >Главная</span></Link>
                </div>
                <div className="mt-5 flex flex-col " >
                    <span className={cn("font-semibold text-xl", {
                        'text-block': theme === 'white',
                        'text-white': theme === 'black'
                    } )}>Покупки</span>
                    <Link href={'/cart'} className="mt-3 w-min" ><span className={cn({
                        'text-block text-opacity-60': theme === 'white',
                        'text-white text-opacity-70': theme === 'black'
                    })} >Корзина</span></Link>
                    <Link href={'/favorites'} className="mt-3 w-min"><span className={cn({
                        'text-block text-opacity-60': theme === 'white',
                        'text-white text-opacity-70': theme === 'black'
                    })} >Нравится</span></Link>
                </div>  
                <div className="mt-5 flex flex-col" >
                    <span className={cn(" font-semibold text-xl", {
                        'text-block': theme === 'white',
                        'text-white': theme === 'black'
                    })} >Отзывы</span>
                    <Link href={'/rewiews'} className="mt-3 w-min"><span className={cn("", {
                        'text-block text-opacity-60': theme === 'white',
                        'text-white text-opacity-70': theme === 'black'
                    } )}>Отзывы</span></Link>
                    <Link href={'/rewiews/create'} className="mt-3 w-min"><span className={cn("", {
                        'text-block text-opacity-60': theme === 'white',
                        'text-white text-opacity-70': theme === 'black'
                    } )}>Написать отзыв</span></Link>
                </div>
                <div className="mt-5 flex flex-col" >
                    <span className={cn(" font-semibold text-xl", {
                        'text-block': theme === 'white',
                        'text-white': theme === 'black'
                    })} >Данные</span>
                    <Link href={'/profile'} className="mt-3 w-min"><span className={cn({
                        'text-block text-opacity-60': theme === 'white',
                        'text-white text-opacity-70': theme === 'black'
                    })} >Профиль</span></Link>
                    <Link href={'/profile/update'} className="mt-3 w-min"><span className={cn({
                        'text-block text-opacity-60': theme === 'white',
                        'text-white text-opacity-70': theme === 'black'
                    })} >Редактировать</span></Link>
                </div>
                </div>
                    <div className=" w-full ml-20 mel:ml-0 mel:mt-10" >
                        <div>
                            <span className={cn(" text-2xl", {
                                'text-block': theme === 'white',
                                'text-white': theme === 'black'
                            })} >Мои данные</span>
                            <div className="flex mx:flex-col" >
                                <div className={cn("mt-7 border px-5 py-5 w-full mr-10 rounded-xl", {
                                    'border-white border-opacity-40': theme === 'black',
                                    'border-block border-opacity-20': theme === 'white'
                                })} >
                                    <span className={cn('text-opacity-50',{
                                        'text-block': theme === 'white',
                                        'text-white': theme === 'black'
                                    })} >Мои отзывы</span>
                                    <div className="flex items-center mt-3" >
                                        <span className={cn(" text-2xl mr-3", {
                                            'text-block': theme === 'white',
                                            'text-white': theme === 'black'
                                        } )}><BiCommentDetail/></span>
                                        {profile.Rewiews?.length 
                                            ? <span className={cn("text-2xl", {
                                                'text-block': theme === 'white',
                                                'text-white': theme === 'black'
                                            })}>{profile.Rewiews.length} отзывов</span>

                                            : <span className={cn("text-2xl", {
                                                'text-block': theme === 'white',
                                                'text-white': theme === 'black'
                                            })}>0 отзывов</span>
                                        }
                                    </div>
                                </div>
                                <div className={cn("mt-7 border  px-5 py-5 w-full mr-10 rounded-xl", {
                                    'border-white border-opacity-40': theme === 'black',
                                    'border-block border-opacity-20': theme === 'white'
                                })} >
                                    <span className={cn('text-opacity-50',{
                                        'text-block': theme === 'white',
                                        'text-white': theme === 'black'
                                    })} >Мои заказы</span>
                                    <div className="flex items-center mt-3" >
                                        <span className={cn(" text-2xl mr-3", {
                                            'text-block': theme === 'white',
                                            'text-white': theme === 'black'
                                        })} ><BsFillBoxSeamFill/></span>
                                        {profile.Orders?.length 
                                            ? <span className={cn("text-2xl", {
                                                'text-block': theme === 'white',
                                                'text-white': theme === 'black'
                                            })}>{profile.Orders.length} заказов</span>

                                            : <span className={cn("text-2xl", {
                                                'text-block': theme === 'white',
                                                'text-white': theme === 'black'
                                            })}>0 заказов</span>
                                        }
                                    </div>
                                </div>
                                <div className={cn("mt-7 border  px-5 py-5 w-full mr-10 rounded-xl", {
                                    'border-white border-opacity-40': theme === 'black',
                                    'border-block border-opacity-20': theme === 'white'
                                })} >
                                    <span className={cn('text-opacity-50',{
                                        'text-block': theme === 'white',
                                        'text-white': theme === 'black'
                                    })} >Мои избранные</span>
                                    <div className="flex items-center mt-3" >
                                        <span className={cn(" text-2xl mr-3", {
                                            'text-block': theme === 'white',
                                            'text-white': theme === 'black'
                                        })} ><AiFillLike/></span>
                                        {profile.favorites?.length 
                                            ? <span className={cn("text-2xl", {
                                                'text-block': theme === 'white',
                                                'text-white': theme === 'black'
                                            })}>{profile.favorites.length} понравилось</span>

                                            : <span className={cn("text-2xl", {
                                                'text-block': theme === 'white',
                                                'text-white': theme === 'black'
                                            })}>0 понравилось</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10" >
                            <div className="" >
                                <span className={cn(" text-2xl", {
                                    'text-block': theme === 'white',
                                    'text-white': theme === 'black'
                                })} >Способы оплаты и доставки</span>
                                <div className="mt-5 flex mx:flex-col" >
                                    <div className={cn("border px-5 py-5 mb-6 w-full mr-10 rounded-xl", {
                                        'border-white border-opacity-40': theme === 'black',
                                        'border-block border-opacity-20': theme === 'white',
                                    })} >
                                        <span  className={cn('text-opacity-50',{
                                            'text-block': theme === 'white',
                                            'text-white': theme === 'black'
                                        })}>Оплата</span>
                                        <div className="flex items-center mt-3" >
                                            <span className={cn(" text-2xl mr-3", {
                                                'text-block': theme === 'white',
                                                'text-white': theme === 'black'
                                            })} ><AiFillCreditCard/></span>
                                            <span className={cn("text-2xl", {
                                                'text-block': theme === 'white',
                                                'text-white': theme === 'black'
                                            })} >Картой любого банка</span>
                                        </div>
                                    </div>
                                    <div className={cn("border px-5 py-5 mb-6 w-full mr-10 rounded-xl", {
                                        'border-white border-opacity-40': theme === 'black',
                                        'border-block border-opacity-20': theme === 'white',
                                    })} >
                                        <span className={cn('text-opacity-50',{
                                            'text-block': theme === 'white',
                                            'text-white': theme === 'black'
                                        })} >Способы доставки</span>
                                        <div className="flex items-center mt-3" >
                                            <span className={cn(" text-2xl mr-3", {
                                                'text-block': theme === 'white',
                                                'text-white': theme === 'black'
                                            })} ><TbTruckDelivery/></span>
                                            <span className={cn(" text-2xl", {
                                                'text-block': theme === 'white',
                                                'text-white': theme === 'black'
                                            })} >Почта России или СДЭК</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10" >
                            <div className="" >
                                <span className={cn("text-2xl", {
                                    'text-block': theme === 'white',
                                    'text-white': theme === 'black'
                                })} >Сервис и помощь</span>
                                <div className="mt-5 flex items-center" >
                                    <Link href={'/pay'} onClick={() => localStorage.setItem('count', '3')} className={cn("border px-5 py-5 w-full mr-10 rounded-xl hover:-translate-y-1 duration-150 ease-in-out", {
                                        'border-white border-opacity-40': theme === 'black',
                                        'border-block border-opacity-20': theme === 'white',
                                    } )}><div>
                                        <span className={cn(" text-2xl", {
                                            'text-block': theme === 'white',
                                            'text-white': theme === 'black'
                                        } )}>Условия оплаты</span>
                                    </div></Link>
                                    <Link href={'/info'} onClick={() => localStorage.setItem('count', '4')} className={cn("border px-5 py-5 w-full mr-10 rounded-xl hover:-translate-y-1 duration-150 ease-in-out", {
                                        'border-white border-opacity-40': theme === 'black',
                                        'border-block border-opacity-20': theme === 'white',
                                    })} ><div>
                                        <span className={cn("text-2xl", {
                                            'text-block': theme === 'white',
                                            'text-white': theme === 'black'
                                        } )}>О нашей компании</span>
                                    </div></Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default Profile;