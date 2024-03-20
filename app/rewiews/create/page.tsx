'use client'
import MainCatalog from '@/components/catalog/Catalog'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import CatalogName from '@/components/ui/CatalogName'
import Field from '@/components/ui/Field'
import { useAppSelector } from '@/hook/useTypedSelector'
import { RewiewService } from '@/services/auth/rewiew.service'
import { IReview, IReviewCreate } from '@/types/rewiew.types'
import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const CreateRewiew = () => {

    interface TypeData {
        text : string
        raiting : number
        order : string
    }

    let orderChoose : string = ''

    const {push} = useRouter()

    const [check1, setCheck1] = useState<boolean>(false)
    const [check2, setCheck2] = useState<boolean>(false)
    const [check3, setCheck3] = useState<boolean>(true)

    const {createRewiew} = RewiewService

    const {theme} = useAppSelector(state => state.theme)

    const { register : create, handleSubmit, formState: {errors}, reset } = useForm<TypeData>({
        mode: 'onChange'
    })

    const onSubmit : SubmitHandler<IReviewCreate> = (data) => {
        createRewiew({raiting: +data.raiting, text: data.text, order: data.order})
        push('/rewiews')
        reset()
    }  

    return <div className={cn({
        'bg-white': theme === 'white',
        'bg-block': theme === 'black'
    })} >
        <div className='mr-40 ml-40 mx:mr-20 mx:ml-20 hub:mr-5 hub:ml-5 px:ml-20 px:mr-20' >
            <Header/>
            <MainCatalog/>
            <div className='mt-28' >
                <div className='flex justify-center' >
                    <CatalogName name='Оставить отзыв' />
                </div>
                <div className='mt-5 w-full flex justify-center' >
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full' >

                        <Field {...create('text', {
                            required: 'Текст обязателен',
                            minLength: {
                                value: 20,
                                message: 'Минимум 20 символов'
                            }
                        })} placeholder='Текст' error={errors?.text?.message} className={cn("mb-2 px-3 py-3 mt-3 text-xl border-gray", {
                            'text-block': theme === 'white',
                            'text-white': theme === 'black'
                        })}/>

                        <Field {...create('raiting', {
                            required: 'Оценка обязательна',
                            min: {
                                value: 1,
                                message: 'Минимальное значение 1'
                            },
                            max: {
                                value: 5,
                                message: 'Максимальное значение 5'
                            }
                        })} placeholder='Оценка' error={errors?.raiting?.message} className={cn("mb-2 px-3 py-3 mt-3 text-xl border-gray", {
                            'text-block': theme === 'white',
                            'text-white': theme === 'black'
                        })}/>
                        <Field {...create('order', {
                            required: 'Обязательное поле',
                            min: {
                                value: 1,
                                message: 'Более 1 символа'
                            }
                        })} placeholder='Способ доставки' str={orderChoose} error={errors?.order?.message} className={cn("mb-2 px-3 py-3 mt-3 text-xl border-gray", {
                            'text-block': theme === 'white',
                            'text-white': theme === 'black'
                        })}/>

                        <div className='mt-5' >
                            <div className='flex justify-center' >
                                <span className={cn('text-xl mb-5', {
                                'text-block': theme === 'white',
                                'text-white': theme === 'black'
                            })} >Как вам доставлили товар?</span>
                            </div>
                            <div className='flex items-center mb-10' >
                                <input onClick={() => orderChoose = 'СДЭК'} className=' scale-150 mr-5 hover:cursor-pointer' type='radio' name='order' checked={check1} onChange={() => {
                                    setCheck1(true)
                                    setCheck2(false)
                                    setCheck3(false)
                                }} />
                                    <Image 
                                        src={'/sdack.png'}
                                        width={100}
                                        height={60}
                                        alt='СДЭК'
                                    />
                                <span className={cn('ml-3 text-base', {
                                    'text-block': theme === 'white',
                                    'text-white': theme === 'black'
                                })} >Доставка СДЭК</span>
                            </div>
                            <div className='flex items-center mb-10' >
                                <input onClick={() => orderChoose = 'Почта России'} className='scale-150 mr-5 hover:cursor-pointer' type='radio' name='order' checked={check2} onChange={() => {
                                    setCheck1(false)
                                    setCheck2(true)
                                    setCheck3(false)
                                }} />
                                <Image 
                                    src={'/pochta.jpeg'}
                                    width={100}
                                    height={60}
                                    alt='СДЭК'
                                />
                                <span className={cn('ml-3 text-base', {
                                    'text-block': theme === 'white',
                                    'text-white': theme === 'black'
                                })} >Доставка Почтой России</span>
                            </div>
                            <div className='flex items-center mb-5' >  
                                <input onClick={() => orderChoose = 'Курьер'} className='scale-150 mr-5 hover:cursor-pointer' type='radio' name='order' checked={check3} onChange={() => {
                                    setCheck1(false)
                                    setCheck2(false)
                                    setCheck3(true)
                                }} />
                                <Image 
                                    src={'/deliver.png'}
                                    width={100}
                                    height={60}
                                    alt='СДЭК'
                                />
                                <span className={cn('ml-3 text-base', {
                                    'text-block': theme === 'white',
                                    'text-white': theme === 'black'
                                })} >Доставка Курьером</span>
                            </div>
                        </div>
                        <div className='mt-5 flex justify-center' >  
                            <button type='submit' className={cn('bg-fiolet py-5 px-20 rounded-xl hover:opacity-50 duration-75 ease-in-out', {
                                'text-block': theme === 'white',
                                'text-white': theme === 'black'
                            })} >Отправить</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default CreateRewiew