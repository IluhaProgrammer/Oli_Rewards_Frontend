import { CategoryService } from "@/services/auth/category.service";
import { useQuery } from "@tanstack/react-query";
import {HiArrowCircleRight} from 'react-icons/hi'
import CatalogName from "../ui/CatalogName";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { useAppSelector } from "@/hook/useTypedSelector";
import cn from 'clsx'

const SideBar = () => {

    const {data : categories} = useQuery(['catalogs'], () => CategoryService.getAll())

    const {theme} = useAppSelector(state => state.theme)

    return <div className="" >
        <div className="text-center" >
           <CatalogName name="Каталог" /> 
        </div>
        <div className=" mt-16 hover:cursor-pointer" >
            {
                categories?.data.map(category => {
                    return (
                        <Link href={`/category/${category.slug}`} key={category.id} >
                        <div className={cn(" font-normal text-xl hover:text-opacity-40 duration-75 ease-in-out", {
                            'text-white': theme === 'black',
                            'text-block text-opacity-70': theme === 'white'
                        })} >
                                <div className={cn("flex items-center text-center justify-between mb-3 border-b pb-3", {
                                    'border-cried border-opacity-20': theme === 'black',
                                    'border-block border-opacity-10': theme === 'white'
                                })} >
                                    <span className="" >{category.name}</span>
                                    < IoIosArrowForward/>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>

}

export default SideBar;