'use client'
import MainCatalog from '@/components/catalog/Catalog'
import RewiewCard from '@/components/catalog/rewiewCard/RewiewCard'
import HoverPad2 from '@/components/flight/HoverPad2'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import CatalogName from '@/components/ui/CatalogName'
import { useAppSelector } from '@/hook/useTypedSelector'
import { RewiewService } from '@/services/auth/rewiew.service'
import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useState } from 'react'

const RewiewPage = () => {

    const {theme} = useAppSelector(state => state.theme)

    const {data : rating} = useQuery(['get avg rating'], () => RewiewService.getAvgRating())

    const {data : counts} = useQuery(['get all rewie'], () => RewiewService.getAll())

    const [date, setDate] = useState<string>('')

    const [rat, setRat] = useState<string>('')

    return <div className={cn({
        'bg-white': theme === 'white',
        'bg-block': theme === 'black'
    })} >
        <div className='ml-40 mr-40 mx:mr-20 mx:ml-20 hub:mr-5 hub:ml-5 px:ml-20 px:mr-20' >
            <Header/>
            <MainCatalog/>
            <div className='mt-28' >
                <HoverPad2 rating={rating?.data ? rating.data : 0} count={counts?.data ? counts.data : []}/>
                <div className={cn('mt-10 border-b pb-5', {
                    'border-b-white border-opacity-30 ': theme === 'black',
                    'border-b-block border-opacity-10': theme === 'white'
                })} > 
                    <div>
                        <span className={cn('text-2xl', {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })} >Отзывы</span>
                        <div className='mt-4' >
                            <span className={cn({
                                'text-white': theme === 'black',
                                'text-block': theme === 'white'
                            })} >Сортировать:</span>
                            <button className={cn('ml-5 hover:text-blue duration-75', {
                                'text-white': theme === 'black',
                                'text-block': theme === 'white'
                            })}>по дате</button>
                            <button className={cn('ml-5 hover:text-blue duration-75', {
                                'text-white': theme === 'black',
                                'text-block': theme === 'white'
                            })}>по оценке</button>
                        </div>
                    </div>
                </div>
                <div    >
                    {counts?.data.map(rewiew => {
                        return <RewiewCard rewiew={rewiew} />
                    })}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default RewiewPage