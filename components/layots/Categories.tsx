"use client"

import MainCatalog from "@/components/catalog/Catalog";
import Cardproduct from "@/components/catalog/cardProd/Cardproduct";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import CatalogName from "@/components/ui/CatalogName";
import { ProductService } from "@/services/products/product.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { MdOutlineArrowBack } from "react-icons/md";
import Link from "next/link";
import cn from 'clsx'
import { useAppSelector } from "@/hook/useTypedSelector";

export default function CategoryPage({params : {slug}} : {params: {slug : string}}) {

    const {theme} = useAppSelector(state => state.theme)

    const {data, isLoading} = useQuery(['get by category'], () => ProductService.getByCategorySlug(slug.toString()), {
        select: ({data}) => data
    })
    
    return <div className={cn({
        'bg-white': theme === 'white',
        'bg-block': theme === 'black'
    })} >
        <div className="ml-40 mr-40 mx:mr-20 mx:ml-20 hub:mr-5 hub:ml-5 px:ml-20 px:mr-20" >
            <Header/>
            <MainCatalog/>
            <div className="mt-28 grid gap-7 tel:flex tel:flex-col"  >
                <div>
                <Link href={'/'} >
                    <div className="text-blue text-lg flex items-center mb-10" >
                        <span className="text-blue mr-3" ><MdOutlineArrowBack/></span>
                        <button>Вернуться назад</button> 
                    </div>
                </Link>
                </div>
                <div className="text-center" >
                    <CatalogName name={`Категория: ${slug.toString()}`}/>
                </div>
                <div className="grid gap-7 mt-20 grid-cols-4 s9:grid-cols-1 px:grid-cols-2">
                    {
                        
                        isLoading

                            ? <div className="text-lg text-center" >Идет загрузка</div>


                        : data?.length 
                        
                        ? data.map(product => {
                            return (
                               <Cardproduct card={product} key={product.id}/>   
                            )
                        }) 
                        
                        : <div className={cn("text-2xl text-center", {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        } )}>Товаров такой категории нет :(</div>

                    }
                </div>
                
            </div>
        </div>
        <Footer/>
    </div>
}
