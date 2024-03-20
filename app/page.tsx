'use client'

import Header from '@/components/header/Header'
import MainCatalog from '@/components/catalog/Catalog'
import Cardproduct from '@/components/catalog/cardProd/Cardproduct'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '@/services/products/product.service'
import SideBar from '@/components/layouts/sidebar'
import Footer from '@/components/footer/Footer'
import { useAppSelector } from '@/hook/useTypedSelector'
import cn from 'clsx'
import { Metadata } from 'next'



export default function Home() {

   const metadata : Metadata = {
    'title': 'Главная',
    'description': 'Это главная страница сайта'
  }

  const {data} = useQuery(['products'], () => ProductService.getAll({
    page: 1,
    limit: 21
  }))

  const {theme} = useAppSelector(state => state.theme)

  return (
    <div className={cn(' ',{
      'bg-white': theme === 'white',
      'bg-block': theme === 'black'
    })} >
    <main className="ml-40 mr-40 mx:ml-20 mx:mr-20 hub:mr-5 hub:ml-5 px:ml-20 px:mr-20">
      <Header/>
      <MainCatalog/>
      <div className='grid s9:flex s9:flex-col mt-28' >
        <SideBar/>
      <main className='grid px-6 py-6 mt-20 gap-7 grid-cols-4 px:grid-cols-2  mx:grid-cols-2 pm:grid-cols-2 tel:grid-cols-2 mhx:grid-cols-3 tel2:grid-cols-2 gal:grid-cols-1' >
        {
          data ? 
          data?.products.map(prod => 
              <Cardproduct card={prod} key={prod.id} />
            )
              : <div className='text-lg font-medium' >Товаров нет :( </div>
        }
      </main>
      </div>
      
      
    </main>
    <Footer/>
    </div>
  )
}
