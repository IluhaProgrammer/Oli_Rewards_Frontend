'use client'

import MainCatalog from "@/components/catalog/Catalog";
import Cardproduct from "@/components/catalog/cardProd/Cardproduct";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import CatalogName from "@/components/ui/CatalogName";
import { useprofile } from "@/hook/useProfile";
import { useAppSelector } from "@/hook/useTypedSelector";
import { useQuery } from "@tanstack/react-query";
import cn from 'clsx'
import { useRouter } from "next/navigation";

const Favorite = () => {

    const {profile} = useprofile()

    const {push} = useRouter()

    const {theme} = useAppSelector(state => state.theme)

    return <div className={cn({
        'bg-white': theme === 'white',
        'bg-block': theme === 'black'
    })} >
        <div className="ml-40 mr-40 mx:mr-20 mx:ml-20 hub:mr-5 hub:ml-5 px:ml-20 px:mr-20" >
            <Header/>
            <MainCatalog/>
            <div className="mt-28">
                <div className="text-center mb-5" >
                   <CatalogName name="Избранные" /> 
                </div>  
                {
                    profile

                    ? <div className="grid gap-7 py-6 px-6 s9:px-2 s9:py-2 grid-cols-4 s9:grid-cols-1 px:grid-cols-2 mx:grid-cols-2 pm:grid-cols-2 mhx:grid-cols-3 tel2:grid-cols-2 s8:grid-cols-1" >
                    {profile?.favorites.length 
                    
                    ? profile.favorites.map(item => 
                        <Cardproduct card={item} key={item.id} />
                    )
                    
                    : <div className={cn("mt-10 text-lg", {
                        'text-block': theme === 'white',
                        'text-white': theme === 'black'
                    } )}>У вас нет избранных товаров :(</div>
                    
                    }
                </div>

                    : <div className="text-center" ><button onClick={() => push('/login')} className="text-blue text-xl" >Авторизоваться</button></div>
                }
                
            </div>
        </div>
        <Footer/>
    </div>
}

export default Favorite;