'use client'

import { forwardRef } from "react";
import { IField } from "./field.types";
import cn from 'clsx'
import { useAppSelector } from "@/hook/useTypedSelector";

const Field = forwardRef<HTMLInputElement, IField>(({
    placeholder, str, error, Icon, style, className, type = 'text', ...rest
}, ref) => {

    const {theme} = useAppSelector(state => state.theme)

    return (
        <div className={cn('', className)} style={style} >   
            <label className=" mb-4" >
                <span className={cn('', {   
                    'text-block': theme === 'white',
                    'text-white': theme === 'black',
                })}>
                    {Icon && <Icon className=" mr-3" />}
                    {placeholder}
                </span>
                <input placeholder={placeholder} ref={ref} type={type} className={cn(' font-semibold border rounded-lg border-gray border-solid placeholder:font-normal outline-none px-6 py-2 w-full focus:border-fiolet transition-all', {
                    'border-red-600': error && error,
                    'text-block': theme === 'white',
                    'text-block ': theme === 'black',   
                }, className)} {...rest} >
                </input>
            </label>
            {error && <div className=' font-semibold text-red-600 text-sm align-middle'>{error}</div>}
        </div>  
    )
})

Field.displayName = 'Field'

export default Field;