import { useAppSelector } from '@/hook/useTypedSelector'
import { IReview } from '@/types/rewiew.types'
import cn from 'clsx'
import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'


interface RC {
    rewiew : IReview
} 

const RewiewCard : FC<RC> = ({rewiew}) => {

    const {theme} = useAppSelector(state => state.theme)

    const getmes = (mes : string | number) => {
        if(mes == 1) {
            return 'Января'

        } else if(mes == 2) {
            return 'Февраля'

        } else if(mes == 3) {
            return 'Марта'

        } else if(mes == 4) {
            return 'Апреля'

        } else if(mes == 5) {
            return 'Мая'

        } else if(mes == 6) {
            return 'Июня'

        } else if(mes == 7) {
            return 'Июля'

        } else if(mes == 8) {
            return 'Августа'

        } else if(mes == 9) {
            return 'Сентября'

        } else if(mes == 10) {
            return 'Октября'

        } else if(mes == 11) {
            return 'Ноября'

        } else {
            return 'Декабря'
        }
    }
    const date = rewiew.createdAt.substr(0, 10).substr(5).substr(0, 2)

    const day = rewiew.createdAt.substr(0, 10).substr(5).substr(3)

    const year = rewiew.createdAt.substr(0, 10).substr(0, 4)

    const time = rewiew.createdAt.substr(11, 13).substr(0, 8)

    return <div className=' mt-16' >
        <div className='mb-2 s9:text-center'>
            <span className={cn('text-lg', {
                'text-white': theme === 'black',
                'text-block': theme === 'white'
            })} >{rewiew.user.name}</span>
        </div>  
        <div>
            <div className='flex items-center s9:flex-col' >
                <Rating
                    readonly
                    initialValue={rewiew.raiting}
                    SVGstyle={{
                        display: 'inline-block'
                    }}
                    size={25}
                    allowFraction
                    transition
                />
                <div className={cn('text-sm ml-3 text-opacity-50 s9:mb-1 s9:mt-1', {
                    'text-white': theme === 'black',
                    'text-block': theme === 'white'
                })} >
                {
                    rewiew.raiting === 5

                    ? <span>Отличный магазин</span>

                    : rewiew.raiting === 4

                    ? <span>Хороший магазин</span>

                    : rewiew.raiting === 3

                    ? <span>Нрмальный магазин</span>

                    : rewiew.raiting === 2

                    ? <span>Ужасный магазин</span>

                    : <span>Странный магазиг</span>
                }
                </div>
                <div className={cn('text-lowLime ml-3 s9:mb-1')} >
                    <span>Заказ оформлен на OLI Rewards</span>
                </div>
                <div className={cn('ml-3 text-opacity-50', {
                    'text-white': theme === 'black',
                    'text-block': theme === 'white'
                })} >
                    <span>Доставка {rewiew.order}</span>
                </div>
            </div>
            <div className={cn('mt-3 text-xl text-opacity-90 s9:text-center', {
                'text-white': theme === 'black',
                'text-block': theme === 'white'
            })} >
                {rewiew.text}
            </div>
            <div className={cn('text-opacity-50 mt-5 s9:text-center',{
                'text-white': theme === 'black',
                'text-block': theme === 'white'
            })} >
                Написан {day} {getmes(date)} {year} года
            </div>
        </div>
    </div>
}

export default RewiewCard