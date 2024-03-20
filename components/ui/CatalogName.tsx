import { useAppSelector } from "@/hook/useTypedSelector";
import { FC } from "react";
import cn from 'clsx'

interface ICat {
    name : string
}

const CatalogName : FC<ICat>= ({name}) => {

    const {theme} = useAppSelector(state => state.theme)

    return <div className="" >
        <div className={cn(" text-4xl text-opacity-80 font-semibold nex:text-3xl mx:text-center px:text-center gal:text-2xl", {
            'text-white': theme === 'black',
            'text-block': theme === 'white',
        })} >{name}</div>
    </div>
}

export default CatalogName