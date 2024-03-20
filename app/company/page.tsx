'use client'

import MainCatalog from "@/components/catalog/Catalog";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import CatalogName from "@/components/ui/CatalogName";
import { useAppSelector } from "@/hook/useTypedSelector";
import Image from "next/image";
import cn from 'clsx'

const Company = () => {

    const {theme} = useAppSelector(state => state.theme)

    return <div className={cn({
        'bg-white': theme === 'white',
        'bg-block': theme === 'black'
    })} >
    <div className="ml-40 mr-40 mx:mr-20 mx:ml-20 hub:mr-5 hub:ml-5 px:ml-20 px:mr-20" >
        <Header/>
        <MainCatalog/>
        <div className="mt-28 grid grid-cols-3 px:grid-cols-2 mel:grid-cols-1 gal:grid-cols-1" >
            <div className="gal:flex gal:flex-col gal:justify-center gal:m-auto" >
                <CatalogName name="Реквизиты" />
               <Image 
                className="mt-10"
                src={'/ohno.jpg'}
                alt="Тут могла быть ваша реклама"
                width={330}
                height={200}
            /> 
            </div>
            <div className="gal:flex gal:flex-col gal:justify-center gal:m-auto">   
                <table className=" mt-20" >
                    <colgroup>
                        <col span={2}></col>
                    </colgroup>
                    <tr>
                        <td className={cn(" p-3 font-semibold", {
                            'bg-block': theme === 'black',
                            'bg-cried text-block ':theme === 'white' 
                        })} >Телефон:</td>
                        <td className={cn(" p-3 font-semibold pl-32", {
                            'bg-block': theme === 'black',
                            'bg-cried text-block text-opacity-70': theme === 'white'
                        })} >+7 (909) 984 30 76</td>
                    </tr>
                    <tr>
                        <td className={cn(" p-3 font-semibold bg-block bg-opacity-10", {
                            'text-block text-opacity-70': theme === 'white'
                        })} >Email:</td>    
                        <td className={cn(" bg-block bg-opacity-10 pl-32", {
                            'text-block text-opacity-70': theme === 'white'
                        })} >oli23rewards@gmail.com</td>
                    </tr>
                    <tr>
                        <td className={cn(" p-3 font-semibold", {
                            'bg-block': theme === 'black',
                            'bg-cried text-block ': theme === 'white'
                        })} >Наши реквизиты:</td>
                        <td className={cn(" p-3 font-semibold pl-32", {
                            'bg-block': theme === 'black',
                            'bg-cried text-block text-opacity-70': theme === 'white'
                        })}>2200 7007 1202 7795</td>
                    </tr>
                    <tr>
                        <td className={cn(" p-3 font-semibold bg-block bg-opacity-10", {
                            'text-block text-opacity-70': theme === 'white'
                        })} >Адрес:</td>
                        <td className={cn(" bg-block bg-opacity-10 pl-32", {
                            'text-block text-opacity-70': theme === 'white'
                        })}>г. Москва, м, Марьино</td>
                    </tr>
                </table>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
}

export default Company;