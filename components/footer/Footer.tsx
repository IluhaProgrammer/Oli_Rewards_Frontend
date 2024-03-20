import Image from "next/image";
import Link from "next/link";
import {AiFillPhone} from 'react-icons/ai'
import {MdOutlineMail} from 'react-icons/md'
import {FaLocationDot} from 'react-icons/fa6'

const Footer = () => {
    return <footer className=" bg-grey py-8 pl-10 pr-10 w-full mt-40" >
        <div className="flex justify-between border-b border-b-cried pb-10 border-opacity-30 w-full tel2:flex-col">
            <ul className=" list-none tel2:text-center" >
                <li className="font-semibold" >Компания</li>
                <Link href='/info' onClick={() => localStorage.setItem('count', JSON.stringify(1))} ><li className="mt-3 opacity-50 font-normal hover:opacity-20 duration-150">О компани</li></Link>
                <Link href='/company' onClick={() => localStorage.setItem('count', JSON.stringify(1))}  ><li className="font-normal opacity-50 hover:opacity-20 duration-150 mt-2">Реквизиты</li></Link>
                <Link href='/pay' onClick={() => localStorage.setItem('count', JSON.stringify(3))}  ><li className="font-normal opacity-50 hover:opacity-20 duration-150 mt-2">Оплата и доставка</li></Link>
                <Link href='/contact' onClick={() => localStorage.setItem('count', JSON.stringify(3))}  ><li className="font-normal opacity-50 hover:opacity-20 duration-150 mt-2">Контакты</li></Link>
                <Link href='/rewiews' onClick={() => localStorage.setItem('count', JSON.stringify(3))}  ><li className="font-normal opacity-50 hover:opacity-20 duration-150 mt-2">Отзывы</li></Link>
            </ul>
            <ul className="list-none tel2:text-center tel2:mt-5" > 
                <li className="font-semibold" >Меню</li>
                <Link href='/category/Kubky' onClick={() => localStorage.setItem('count', JSON.stringify(2))} ><li className="hover:opacity-20 font-normal opacity-50  duration-150 mt-3">Кубки</li></Link>
                <Link href='/' onClick={() => localStorage.setItem('count', JSON.stringify(2))} ><li className="hover:opacity-20 opacity-50 font-normal  duration-150 mt-2">Награды</li></Link>
                <Link href='/category/Medaly' onClick={() => localStorage.setItem('count', JSON.stringify(2))} ><li className="hover:opacity-20 font-normal opacity-50  duration-150 mt-2">Медали</li></Link>
            </ul>
            <ul className="list-none tel2:text-center tel2:mb-5 tel2:mt-5" > 
                <li className="font-semibold" >Прочее</li>
                <Link href='/favorites' onClick={() => localStorage.setItem('count', JSON.stringify(4))} ><li className="hover:opacity-20 opacity-50 font-normal  duration-150 mt-3">Избранные</li></Link>
                <Link href='/cart' onClick={() => localStorage.setItem('count', JSON.stringify(4))} ><li className="hover:opacity-20 opacity-50 font-normal  duration-150 mt-2">Корзина</li></Link>
            </ul>
            <ul className="list-none tel2:justify-center tel2:flex" > 
                <li>
                    <Image
                        src={'/footer.png'}
                        alt='Фото'
                        width={100}
                        height={100}
                    />
                </li>
            </ul>
            <ul className="list-none tel2:text-center tel2:mt-5" > 
                <li className="font-semibold" >Контакты</li>
                <li className="mt-4 font-semibold flex items-center tel2:justify-center"><span className="text-lg mr-4 opacity-30" ><AiFillPhone/></span>+7 (909) 984 30 76</li>
                <li className="mt-4 opacity-30 text-sm">Пн. – Пт.: с 9:00 до 19:00</li>
                <li className="mt-4 flex font-semibold text-sm tel2:justify-center"><span className="text-lg opacity-30 mr-4" ><FaLocationDot/></span>г. Москва</li>
                <li className="mt-4 flex font-semibold tel2:justify-center"><span className="text-lg opacity-30 mr-4" ><MdOutlineMail/></span>oli23rewards@gmail.com</li>
            </ul>
        </div>
        <div className="mt-10 opacity-30" >
            <span className="" >© 2024 Все права защищены.</span>
        </div>
    </footer>
}

export default Footer;