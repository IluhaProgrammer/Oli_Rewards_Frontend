import { useRouter } from 'next/navigation'
import {SubmitHandler, useForm} from 'react-hook-form'
import Field from '../ui/Field'
import { useAppDispatch, useAppSelector } from '@/hook/useTypedSelector'
import cn from 'clsx'
import CatalogName from '../ui/CatalogName'
import Image from 'next/image'
import { SendMaileService } from '@/services/auth/sendmail.service'
import { useprofile } from '@/hook/useProfile'
import { FC, useState } from 'react'
import { ICartItem } from '@/types/cartitem.types'
import { useActions } from '@/hook/useActions'
import { addNewOrder } from '@/store/orders/order.slice'
import { useMutation, useQuery } from '@tanstack/react-query'
import { OrderService } from '@/services/auth/order.service'

type TypeData = {
    name : string
    telephone : string
    email : string
    address : string    
}

interface OrderForm {
    totalPrice : number
    cardProducts : ICartItem[]
}

const OrderForm : FC<OrderForm> = ({totalPrice, cardProducts})=> {

    const {mutate} = useMutation(['place order'], () => OrderService.placeOrder({status: 'PENDING', items: cardProducts}))

    const { push } = useRouter()

    const [checked, setChecked] = useState<boolean>(true)
    const [check, setCheck] = useState<boolean>(false)

    const [check1, setCheck1] = useState<boolean>(true)
    const [check2, setCheck2] = useState<boolean>(false)
    const [check3, setCheck3] = useState<boolean>(false)

    const [orderChoose, setOrderChoose] = useState<string>("")
    const [paymentChoose, setPaymentChoose] = useState<string>("")

    

    const {profile} = useprofile()

    const {resetCart} = useActions()

    const dispatch = useAppDispatch()

    const {register : submit, handleSubmit, formState: {errors}, reset} = useForm<TypeData>({
        mode: 'onChange'
    })

    const onSubmit : SubmitHandler<TypeData> = (data) => {
        reset()
        mutate()
        push('/complete')
        resetCart()
        SendMaileService.sendMail({email: data.email, phone: data.telephone, address: data.address, fullName: data.name, payment: paymentChoose, deliver: orderChoose, totalPrice, cartProducts: cardProducts})
    }

    const {theme} = useAppSelector(state => state.theme)

    return <div className={cn('border mt-10 py-4 px-5 rounded-xl', {
        'border-white border-opacity-70': theme === 'black',
        'border-block border-opacity-10': theme === 'white'
    })}  >
        <div className='text-center mb-5' >
            <span className={cn(' font-semibold text-2xl ', {
            'text-white': theme === 'black',
            'text-block': theme === 'white',
        })} >Контактная информация</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
        <Field {...submit('name', {
            required: 'ФИО обязательно',
            minLength: {
                value: 5,
                message: 'Минимум 5 символов'
            }
        })} placeholder='ФИО' className={cn(' font-semibold mt-2 mb-2', {
            
        })} error={errors.name?.message} />

        <Field {...submit('telephone', {
            required: 'Телефон обязательно',
            minLength: {
                value: 7,
                message: 'Минимум 7 символов'
            }
        })} placeholder='Телефон' className={cn(' font-semibold mt-2 mb-2', {
            
        })} error={errors.telephone?.message} />

        <Field {...submit('email', {
            required: 'Почта обязательно',
            minLength: {
                value: 5,
                message: 'Минимум 5 символов'
            }
        })} placeholder='E-mail' className={cn(' font-semibold mt-2 mb-2', {
            
        })} error={errors.email?.message} />

        <Field {...submit('address', {
            required: 'Адрес обязательно',
            minLength: {
                value: 8,
                message: 'Минимум 8 символов'
            }
        })} placeholder='Адрес' className={cn(' font-semibold mt-2 mb-2', {
            
        })} error={errors.address?.message} />

        <div>
            <div className='text-center mb-5' >
                <span className={cn(' font-semibold text-2xl ', {
            'text-white': theme === 'black',
            'text-block': theme === 'white',
            })} >Способ доставки</span>
            </div>
           <div className='flex items-center mb-10' >
            <input onClick={() => setOrderChoose('SDACK')} type='radio' className=' scale-150 mr-5 hover:cursor-pointer' name='order' value='SDACK' checked={check1} onChange={() => {
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
            <span className={cn('text-lg font-semibold ml-5', {
            'text-block': theme === 'white',
            'text-white': theme === 'black',    
        })}>Доставка СДЭК</span>
        </div>

        <div className='flex items-center mb-10' >
            <input onClick={() => setPaymentChoose('pochtaRussia')} type='radio' className=' scale-150 mr-5 hover:cursor-pointer' name='order' value='pochtaRussia' checked={check2} onChange={() => {
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
            <span className={cn('text-lg font-semibold ml-5', {
            'text-block': theme === 'white',
            'text-white': theme === 'black',    
        })}>Доставка Почтой России</span>
        </div> 

        <div className='flex items-center' >
            <input onClick={() => setOrderChoose('delivery')} type='radio' className=' scale-150 mr-5 hover:cursor-pointer' name='order' value='delivery' checked={check3} onChange={() => {
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
            <span className={cn('text-lg font-semibold ml-5', {
            'text-block': theme === 'white',
            'text-white': theme === 'black',    
        })}>Доставка курьером <p/> - 290 рублей</span>
        </div> 
        </div>

        <div>
        <div className='text-center mb-5 mt-5' >
                <span className={cn(' font-semibold text-2xl ', {
            'text-white': theme === 'black',
            'text-block': theme === 'white',
            })} >Способ оплаты</span>
            </div>

            <div className='flex items-center' >
            <input onClick={() => setPaymentChoose('cash')} type='radio' className=' scale-150 mr-5 hover:cursor-pointer' name='payment' value='cash' checked={check} onChange={() => {
                setCheck(true)
                setChecked(false)
            }} />
            <span className={cn('text-lg font-semibold', {
            'text-block': theme === 'white',
            'text-white': theme === 'black',    
        })}>Оплата наличными при получении <p/> (Для доставки курьером)</span>
        </div> 

        <div className='flex items-center' >
            <input onClick={() => setPaymentChoose('card')} type='radio' className=' scale-150 mr-5 hover:cursor-pointer' name='payment' value='card' checked={checked} onChange={() => {
                setCheck(false)
                setChecked(true)
            }} />
            <span className={cn('text-lg font-semibold mt-5 mb-5', {
            'text-block': theme === 'white',
            'text-white': theme === 'black',    
        })}>Оплата картой</span>
        </div> 
        </div>
        
        
        <button type='submit' className={cn('text-white bg-lime px-3 py-4 w-full rounded-xl font-fontsemibold hover:scale-95 duration-150 ease-in-out mt-5', {
            'text-block': theme === 'white',
            'text-white': theme === 'black',    
        })} >Заказать</button>

    </form>
    </div>
    
}

export default OrderForm