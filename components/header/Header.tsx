import { FC } from "react";
import Image  from "next/image";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import Button from "../ui/Button";
import { goggle } from "@/assets/utils/utils";
import { useprofile } from "@/hook/useProfile";
import Link from "next/link";
import { useActions } from "@/hook/useActions";
import { useAppSelector } from "@/hook/useTypedSelector";
import cn from 'clsx'

const Header : FC = () => {

    const {profile} = useprofile()

    const {theme} = useAppSelector(state => state.theme)

    const {logout} = useActions()

    const Logout = () => {
      location.reload()
      logout()
    }

    return (
        <header className={cn('flex justify-between px-6 py-6 items-center border-b-2 gal:flex-col', {
          'border-b-white border-opacity-70': theme === 'black',
          'border-b-block border-opacity-10': theme === 'white'
        })} >
      <div className="mx:mr-5" >
        <Link href={'/'} className="" onClick={() => localStorage.setItem('count', '2')} >
            <Image
          src={theme === 'white' ? '/log-white.jpg' : '/log-black.jpg'}
          className=""
          width={150}
          height={20}
          alt='Shop avatar'
          />
        </Link>
      </div>
        <div className={cn('gal:text-center opacity-80 text-xs', {
          'text-white': theme === 'black',
          'text-block opacity-70': theme === 'white'
        })} >
          <span className="" >Именные спортивные призы <p/> и награды для наших покупателей</span>
        </div>
        <div className='mx:mr-5' >
        <div className='flex gal:mt-5' >
          <span className=' text-green-500 text-2xl' >
            <FaSquareWhatsapp />
          </span>
          <a className='text-white' target="_blank" href='https://api.whatsapp.com/send?phone=79099843076'><span className={cn(' ml-2 text-sm font-semibold', {
            'text-white': theme === 'black',
            'text-block': theme === 'white'
          })} >WhatsApp: Написать</span></a>
        </div>
        <div className='flex mt-3 ' >
          <span className={cn(' text-2xl', {
            'text-white': theme === 'black',
            'text-block': theme === 'white'
          })} >
            <MdOutlineMarkEmailUnread/>
          </span>
          <a className='text-white' href=''><span className={cn(' ml-2 text-sm font-semibold', {
            'text-white': theme === 'black',
            'text-block': theme === 'white'
          })}>oli23rewards@gmail.com</span></a>
        </div>
        </div>  
        <div className="mx:mr-5 gal:mt-5" >
          <div className='flex gal:mb-5 gal:text-center' >
            <span className='text-fiolet text-2xl' ><AiFillPhone/></span>
            <span className={cn(' text-lg font-semibold ml-2', {
              'text-white': theme === 'black',
              'text-block': theme === 'white'
            })} >+7 (909) 984-30-76</span>
          </div>
          <div className={cn('text-sm gal:text-center font-light opacity-80 mt-1', {
            'text-white': theme === 'black',
            'text-block': theme === 'white'
          } )}>
            <span>Пн. – Пт.: с 9:00 до 19:00</span>
          </div>
        </div>
        <Button className='' variant='dark'>{

          profile 

          ? <button type='button' onClick={() => Logout()} >Выйти</button>

          : <Link href={'/login'} >Войти</Link>

        }</Button>
      </header>

    )

}

export default Header;