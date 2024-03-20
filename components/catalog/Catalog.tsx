import {BsFillHeartFill} from 'react-icons/bs'
import {GrCart} from 'react-icons/gr'
import {RiShoppingCart2Fill, RiShoppingCartFill} from 'react-icons/ri'
import {BsFillBoxSeamFill} from 'react-icons/bs'
import {IoMdLogIn} from 'react-icons/io'
import { UseAuth } from '@/hook/useAuth'
import {FaShoppingBasket, FaUserCircle} from 'react-icons/fa'
import Link from 'next/link'
import cn from 'clsx'
import { useState } from 'react'
import { LuShoppingCart } from "react-icons/lu";
import CardCatalog from './cardCatalog/CatalogCard'
import { useOutside } from '@/hook/useOutside'
import { useAppDispatch, useAppSelector } from '@/hook/useTypedSelector'
import { setCategory } from '@/store/catalog/Catalog.slice'
import { useCart } from '@/hook/useCart'
import { useprofile } from '@/hook/useProfile'
import { changeTheme } from '@/store/theme/ThemeSlice'

const MainCatalog = () => {

    const {user} = UseAuth()

    const {theme} = useAppSelector(state => state.theme)

    const dispatch = useAppDispatch()

    const {profile} = useprofile()

    const {items} = useCart()

    const catalogsNames = [{name:'Реквизиты', id: 1, slug : 'company'}, {name:'Каталог', id : 2, slug : '/'}, , {name: 'Оплата и доставка', id : 3, slug : 'pay'}, {name:'О компании', id : 4, slug : 'info'}, {name:'Контакты', id : 5, slug : 'contact' }, {name:'Отзывы', id : 6, slug : 'rewiews' }]

    return <div className={cn("flex justify-between py-6 items-center border-b-2 gal:overflow-x-auto tel:overflow-x-auto", {
        'border-b-white border-opacity-70': theme === 'black',
        'border-b-block border-opacity-10': theme === 'white', 
    })}>
        {catalogsNames.map((item, index) => {
            return (
                <Link href={`/${item?.slug}`} key={item?.id} ><button onClick={() => localStorage.setItem('count', JSON.stringify(item?.id))} className={cn("font-semibold hover:scale-105 relative after:absolute after:h-0.5 after:bg-fiolet after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-150 gal:mr-3 tel:mr-3", {
                    'text-white text-lg after:bg-white': theme === 'black',
                    'text-block text-lg after:bg-block hover:text-fiolet': theme === 'white',
                })} key={item?.id} >
                    {item?.name}
                </button></Link>
            )
        })}
        <div>
            <Link href='/favorites' onClick={() => localStorage.setItem('count', '10')} ><button className={cn('tel:mr-3 text-3xl relative hover:text-red-600 duration-300 ease-in-out hover:scale-110', {
                'text-red-600 ': theme === 'black',
                'text-red-600': theme === 'white',
            })} ><span className={cn({'text-red-600 scale-110': 10 === Number(localStorage.getItem('count'))})} ><BsFillHeartFill/></span>
            {
                profile

                ? <span className='absolute -right-6 -top-5 px-4 py-1 bg-red-600 text-white font-normal rounded-full scale-50 flex' >{profile.favorites.length ? profile.favorites.length : 0}</span>

                : <></>
            }
            </button></Link>
        </div>
       <div>
            <Link href='/cart' onClick={() => localStorage.setItem('count', '11')} ><button className={cn('tel:mr-3 text-3xl relative duration-300 ease-in-out hover:scale-110', {
                'text-blue': theme === 'black',
                'text-blue ': theme === 'white',
            })} >
                <span className={cn({' scale-110': 11 === Number(localStorage.getItem('count'))})} ><FaShoppingBasket  /></span>
                {
                    profile

                    ? <span className=' absolute -right-6 -top-5 px-4 py-1 bg-red-600 text-white font-normal rounded-full scale-50 flex'>{items.length ? items.length : 0}</span>

                    : <></>
                }
                
                </button></Link>
       </div>
       <div>
            <button onClick={() => dispatch(changeTheme(theme === 'white' ? {theme : 'black'} : { theme : 'white'}))} className={cn('tel:mr-5 text-lg hover:scale-95 duration-150 ease-in-out', {
                'text-block bg-white p-1 rounded-xl': theme === 'black',
                'text-white bg-block p-1 rounded-xl': theme === 'white'
            })} >{theme === 'black' ? 'Светлую' : 'Темную'}</button>
       </div>
       <div>
        {  user ? <Link href='/profile' onClick={() => localStorage.setItem('count', '13')}><button className={cn(' text-3xl hover:text-lowLime duration-300 ease-in-out hover:scale-110', {
            'text-lowLime ': theme === 'black',
            'text-lowLime': theme === 'white'
        })}><span className={cn({'text-lowLime scale-110': 13 === Number(localStorage.getItem('count'))})} ><FaUserCircle/></span></button></Link>
        
                : <Link href='/login' onClick={() => localStorage.setItem('count', '2')}><button className={cn(' text-3xl hover:text-lowLime duration-300 ease-in-out hover:scale-110', {
                    'text-lowLime': theme === 'black',
                    'text-lowLime ': theme === 'white'
                })} ><IoMdLogIn/></button></Link>
        }
       </div>
    </div>

}

export default MainCatalog;