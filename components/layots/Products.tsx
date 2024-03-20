'use client'

import MainCatalog from "@/components/catalog/Catalog";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import CatalogName from "@/components/ui/CatalogName";
import { ProductService } from "@/services/products/product.service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { MdOutlineArrowBack } from "react-icons/md";
import cn from 'clsx'
import {IoSquare} from 'react-icons/io5'
import { useAppSelector } from "@/hook/useTypedSelector";
import {SiFontforge} from 'react-icons/si'
import { TbFileDescription } from "react-icons/tb";
import AddToCart from "@/components/ui/AddToCart";
import { IProduct } from "@/types/product.types";
import { useprofile } from "@/hook/useProfile";

export default function ProductIdPage({params: {id}} : {params: {id : string | number}}) {

    const [text, setText] = useState<string>('')

    const {theme} = useAppSelector(state => state.theme)

    const [color, setColor] = useState('белый')

    const [font, setFont] = useState('Golos_Text')

    const router = useRouter()

    const {data, isLoading} = useQuery(['get product'], () => ProductService.getById(+id), {
        select: ({data}) => data
    })

    if(isLoading) {
        <div className="text-center text-lg" >Идет загрузка</div>
    }

    return <div className={cn({
        'bg-white': theme === 'white',
        'bg-block': theme === 'black'
    })} >
        <div className="ml-40 mr-40 mx:mr-20 mx:ml-20 hub:mr-5 hub:ml-5 px:ml-20 px:mr-20" >
            <Header/>
            <MainCatalog/>
            <div className="mt-10">
                <div>
                    <button onClick={() => router.back()}>
                        <div className="text-blue text-lg flex items-center mb-10" >
                            <span className="text-blue mr-3" ><MdOutlineArrowBack/></span>
                            <button>Вернуться назад</button> 
                        </div>
                    </button>
                </div>
                <div className="flex justify-center" >
                <div className={cn(" w-3/5 px:w-full mx:w-full", {
                    'border-white': theme === 'black',
                    'border-block border-opacity-10': theme === 'white'
                })}>
                    <div className={cn("flex justify-between gal:flex-col", {
                        'items-start': data?.category.id === 2,
                        'items-end': data?.category.id === 1
                    })}>
                        <div className="relative gal:flex gal:flex-col gal:justify-center gal:m-auto" >
                            <Image
                                src={data?.images ? data.images[0] : ''}
                                alt="Фото продукта"
                                width={375}
                                height={250}
                                className="mt-10 rounded-xl"
                            />
                            <div className={cn("flex justify-center mr-5 nex:ml-5 pl-4 ph:pr-5 ", {
                                'font-sans': font === 'Playpen Sans',
                                'font-rubic': font === 'Rubik',
                                'font-rubic ': font === 'Rubik',
                                'font-ita': font === 'Dancing Script',  
                                'font-ant': font === 'Anton',
                                'font-ita2': font === 'Pacifico',
                                'font-met': font === 'Metal Mania',
                                'font-lst': font === 'Black Ops One',
                            })} >
                                <span className={cn(' text-base s8:text-sm absolute bottom-12 opacity-60 flex left-auto right-auto z-10 font-normal gal:bottom-40 mel:bottom-12 s8:bottom-8 mel:pr-4 ph:pl-4', {
                                    'text-cried font-Playpen': color === 'white',
                                    'text-lowLime': color === 'laim',
                                    'text-black': color === 'black',
                                    'text-yellow': color === 'yellow',
                                    'text-blue': color === 'blue',
                                    'text-silver': color === 'silver',
                                    'text-gold': color === 'gold',
                                    'text-diamond': color === 'diamond',
                                })} >{text}</span>
                            </div>
                                
                        </div>
                        <div className="flex flex-col gal:justify-center gal:m-auto gal:mt-8" >
                            <div className="mb-10" >
                            </div>
                            <div className="mb-2" >
                                <span className={cn('text-3xl ph:text-2xl', {
                                    'text-white': theme === 'black',
                                    'text-block': theme === 'white'
                                })} >{`${data?.name}/${data?.slug}`}</span>
                            </div>
                            <div className="flex items-center mb-5" >
                                <span className=" text-lowLime text-xl mr-2" ><BsCheckLg/></span>
                                <span className={cn("text-lg", {
                        'text-white': theme === 'black',
                        'text-block': theme === 'white'
                    })} >В наличии</span>
                            </div>
                            <div className={cn("text-lg mb-10", {
                        'text-white': theme === 'black',
                        'text-block': theme === 'white'
                    })} >
                                <span className="ml-2" >₽{data?.price && data?.price - 0.01}</span>
                            </div>

                            {
                                data?.category.id === 2

                                ? <div className={cn('text-lg text-block')} >
                                    <span>Медаль из орг-стекла - воплощение <p/>  элегантности и утонченности. <p/>  Эта уникальная и прекрасно <p/>  оформленная медаль создана <p/>  для тех, кто стремится к <p/>  изысканности в каждой детали.</span>
                                        <div className="mt-7" >
                                            <span className="" > <p/> Эта медаль идеально подойдет <p/>  для любителей чего <p/>  то изысканного.</span>
                                        </div>
                                </div>

                                : null
                            }

                            {
                                data?.category.id === 3

                                ? <div className={cn('text-lg text-block')} >
                                    <span>Возможно, самое время принести <p/> изюминку в свою коллекцию <p/> декоративных предметов! Представляем <p/> вам шедевр современного дизайна<p/> - вазу, изготовленную с использованием <p/> передовых технологий 3D печати и <p/> экологически чистого пластика.</span>
                                        <div className="mt-7" >
                                            <span className="" > <p/> Такая ваза может идеально <p/> вписаться в ваш интерьер.</span>
                                        </div>
                                </div>

                                : null
                            }
                            
                            {
                                data?.category.id === 1

                                ? <div>
                                <span className={cn('text-lg', {
                                    'text-white': theme === 'black',
                                    'text-block': theme === 'white'
                                })} >
                                    Выберите кастом:
                                </span>
                            </div>

                                : null
                            }
                            
                            {
                                data?.category.id === 1

                                ? <div className="mt-3" >
                            <div className="mb-5" >
                                <button className={cn("text-blue text-6xl mr-3 hover:opacity-50 ease-in-out ph:text-5xl")} onClick={() => setFont('Playpen Sans')} ><SiFontforge/></button>
                                <button className="text-silver text-6xl mr-3 hover:opacity-50  ease-in-out ph:text-5xl" onClick={() => setFont('Rubik')} ><SiFontforge/></button>
                                <button className="text-gold text-6xl mr-3 hover:opacity-50  ease-in-out ph:text-5xl" onClick={() => setFont('Nosifer')} ><SiFontforge/></button>
                                <button className="text-diamond text-6xl mr-3 hover:opacity-50  ease-in-out ph:text-5xl" onClick={() => setFont('Dancing Script')} ><SiFontforge/></button>
                            </div>
                            <div className="mb-5" >
                                <button className="text-cried text-6xl mr-3 hover:opacity-50  ease-in-out ph:text-5xl" onClick={() => setFont('Anton')} ><SiFontforge/></button>
                                <button className="text-lowLime text-6xl mr-3 hover:opacity-50  ease-in-out ph:text-5xl" onClick={() => setFont('Pacifico')} ><SiFontforge/></button>
                                <button className="text-red-600 text-6xl mr-3 hover:opacity-50  ease-in-out ph:text-5xl" onClick={() => setFont('Metal Mania')} ><SiFontforge/></button>
                                <button className="text-yellow text-6xl mr-3 hover:opacity-50  ease-in-out ph:text-5xl" onClick={() => setFont('Black Ops One')} ><SiFontforge/></button>
                            </div>
                            <div className="mb-5" >
                                <button className="text-blue text-6xl mr-3 hover:opacity-50  ease-in-out ph:text-5xl" onClick={() => setColor('blue')} ><IoSquare/></button>
                                <button className="text-silver text-6xl mr-3 hover:opacity-50  ease-in-out ph:text-5xl" onClick={() => setColor('silver')}  ><IoSquare/></button>
                                <button className="text-gold text-6xl mr-3 hover:opacity-50  ease-in-out ph:text-5xl" onClick={() => setColor('gold')}  ><IoSquare/></button>
                                <button className="text-diamond text-6xl hover:opacity-50  ease-in-out ph:text-5xl" onClick={() => setColor('diamond')}  ><IoSquare/></button>
                            </div>
                            <div className="mb-5" >
                                <button className="text-cried text-6xl mr-3 hover:opacity-50  ease-in-out ph:text-5xl" onClick={() => setColor('white')} ><IoSquare/></button>
                                <button className="text-lowLime text-6xl mr-3 hover:opacity-50  ease-in-out ph:text-5xl" onClick={() => setColor('laim')}  ><IoSquare/></button>
                                <button className="text-black text-6xl mr-3 hover:opacity-50  ease-in-out ph:text-5xl" onClick={() => setColor('black')}  ><IoSquare/></button>
                                <button className="text-yellow text-6xl hover:opacity-50  ease-in-out ph:text-5xl" onClick={() => setColor('yellow')}  ><IoSquare/></button>
                            </div>
                            <input maxLength={10} className={cn("text-block py-2 px-5 rounded-xl focus:border-fiolet outline-none border-2")} placeholder="Введите текст" name={text} onChange={(e) => setText(e.target.value)} />
                        </div>  

                                : <></>
                            }
                            
                        </div>
                    </div>
                    <div className="mt-5 flex justify-between gal:flex-col s8:overflow-x-auto s10:overflow-x-auto" >
                        <table className={cn("border border-opacity-50", {
                            'border-white': theme === 'black',
                            'border-block border-opacity-10': theme === 'white'
                        })} >
                            <tr className="bg-fiolet" >
                                <th className="py-4 px-2">Артикул</th>
                                <th className="py-4 px-3">{data?.category.id === 1 ? 'Высота' : data?.category.id === 3 ? 'Высота' : 'Диаметр'}</th>
                                <th className="py-4 px-3">Цена</th>
                                <th className="py-4 px-3">Наличие</th>
                            </tr>
                            <tr className={cn({
                        'text-white': theme === 'black',
                        'text-block': theme === 'white'
                    })} >
                                <td className="px-3 py-4">{data?.slug}</td>
                                <td className="px-3 py-4">23 см</td>
                                <td className="px-3 py-4">{data?.price} руб</td>
                                <td className="px-3 py-4">Да</td>
                            </tr>
                        </table>
                            <div className="flex flex-col mr-12 gal:mr-0 gal:mt-5" >
                                <AddToCart product={data || {} as IProduct} text={text} color={color} script={font} />
                            </div>
                    </div>
                </div>
                </div>
                <div className="mt-10" >
                    <div className="text-center text-3xl flex items-center justify-center " >
                        <span className={cn("font-rubic text-center", {
                        'text-white': theme === 'black',
                        'text-block': theme === 'white'
                    })} >О товаре</span>
                        <span className="ml-5" ><TbFileDescription/></span>
                    </div>
                    <div className="mt-5 text-center" >
                        <span className={cn(" text-xl font-rubic", {
                        'text-white': theme === 'black',
                        'text-block': theme === 'white'
                    })} >{data?.description}</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}