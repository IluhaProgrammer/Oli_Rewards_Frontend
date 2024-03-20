import {IoLocationSharp} from 'react-icons/io5'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import {BiSolidTime} from 'react-icons/bi'
import cn from 'clsx'
import { useAppSelector } from '@/hook/useTypedSelector'

const HoverPad = () => {

    const {theme} = useAppSelector(state => state.theme)

    return <div className={cn("p-6 rounded-xl w-full overflow-x-auto mt-20", {
        'bg-white': theme === 'black',
        'bg-lowYellow': theme === 'white'
    })} >
        <div className='flex justify-between pm:overflow-x-auto' >
            <div className='flex items-center' >
                <span className={cn(' text-5xl', {
                    'text-white': theme === 'white',
                    'text-fiolet': theme === 'black'
                })} ><IoLocationSharp/></span>
                <div className={cn('ml-2 flex flex-col', {
                    'text-white': theme === 'white',
                    'text-block': theme === 'black'
                })} >
                    <span className=' text-base font-semibold' >Адрес</span>
                    <span className='text-sm ' >г.Москва, м.Марьино</span>
                </div>
            </div>
            <div className='flex items-center ' >
                <span className={cn('text-4xl', {
                    'text-white': theme === 'white',
                    'text-fiolet': theme === 'black'
                })} ><BsFillTelephoneFill/></span>
                <div className={cn('ml-2 flex flex-col', {
                    'text-white': theme === 'white',
                    'text-block': theme === 'black'
                })} >
                    <span className=' text-base font-semibold ' >Телефон</span>
                    <span className='text-sm ' >+7 (909) 984-30-76</span>
                </div>
            </div>
            <div className='flex items-center ' >
                <span className={cn('text-4xl', {
                    'text-white': theme === 'white',
                    'text-fiolet': theme === 'black'
                })} ><MdEmail/></span>
                <div className={cn('ml-2 flex flex-col', {
                    'text-white': theme === 'white',
                    'text-block': theme === 'black'
                })} >
                    <span className=' text-base font-semibold ' >Email</span>
                    <span className='text-sm' >oli23rewards@gmail.com</span>
                </div>
            </div>
            <div className='flex items-center ' >
                <span className={cn('text-4xl', {
                    'text-white': theme === 'white',
                    'text-fiolet': theme === 'black'
                })} ><BiSolidTime/></span>
                <div className={cn('ml-2 flex flex-col', {
                    'text-white': theme === 'white',
                    'text-block': theme === 'black'
                })} >
                    <span className=' text-base font-semibold' >Вреия работы</span>
                    <span className='text-sm' >Пн. - Пт. с 9:00 - 19:00</span>
                    <span className='text-sm' >Сб. - Вс. Выходные</span>
                </div>
            </div>
        </div>
    </div>
}

export default HoverPad;