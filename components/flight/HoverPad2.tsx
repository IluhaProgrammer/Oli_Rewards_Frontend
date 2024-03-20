import { useAppSelector } from '@/hook/useTypedSelector'
import { RewiewService } from '@/services/auth/rewiew.service'
import { IReview } from '@/types/rewiew.types'
import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

interface HP {
    rating : number
    count : IReview[]
}

const HoverPad2 : FC<HP> = ({rating, count}) => {

    const {theme} = useAppSelector(state => state.theme)

    const [status, setStatus] = useState(count.reduce((acc, review) => acc + review.raiting, 0 ) / count.length)

    return  <div>
        <div className='' >
            <span className={cn('text-3xl font-semibold',{
                'text-white': theme === 'black',
                'text-block': theme === 'white'
            })} >Рейтинг магазина</span>
            <div className={cn('border mt-10 pl-32 pr-32 pt-10 pb-10 flex justify-between nex:pl-10 nex:pr-10 tel:pr-16 tel:pl-16 s9:pl-2 s9:pr-2 s9:flex-col', {
                'border-white border-opacity-30 ': theme === 'black',
                'border-block border-opacity-10': theme === 'white'
            })} >
                <div className='s9:mb-3' >
                    <div className='flex items-center s9:justify-center' >
                        <span className={cn('mr-2 text-xl', {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })} >
                            {status}
                        </span>
                        <Rating
                            readonly
                            initialValue={status}
                            SVGstyle={{
                                display: 'inline-block'
                            }}
                            size={25}
                            allowFraction
                            transition
                        />
                    </div>
                    <div className={cn('text-opacity-50 s9:text-center',{
                        'text-white': theme === 'black',
                        'text-block': theme === 'white'
                    })} >
                        Рейтинг магазина
                    </div>
                </div>
                <div className='' >
                    <div className='text-lg s9:text-center'>
                        <span className={cn({
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })}>{count.length}</span>
                        <span className={cn('ml-1',{
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })}>
                            отзывов
                        </span>
                    </div>
                    <div className='s9:mb-3' >
                        <span className={cn(' text-opacity-50 s9:flex s9:justify-center', {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })} >
                            За 3 месяца
                        </span>
                    </div>
                </div>
                <div className='' >
                    <div className='text-lg s9:flex s9:justify-center'>
                        <span className={cn('', {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })}>{count.length}</span>
                        <span className={cn('ml-1',{
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })}>
                            отзывов
                        </span>
                    </div>
                    <div>
                        <span className={cn(' text-opacity-50 s9:flex s9:justify-center', {
                            'text-white': theme === 'black',
                            'text-block': theme === 'white'
                        })} >
                            За все время
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}   

export default HoverPad2