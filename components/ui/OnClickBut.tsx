import { PropsWithChildren, FC, ButtonHTMLAttributes } from "react";
import cn from 'clsx'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant : 'dark' | 'light'
}

const OnClickBut : FC<PropsWithChildren<IButton>> = ({children, variant, className, onClick, ...rest}) => {
    return <button {...rest} className={cn('rounded-xl px-10 py-2 shadow flex mt-3 hover:shadow-lg duration-300 ease-in-out', {
        'text-blue bg-white' : variant === 'light',
        'text-white bg-fiolet ' : variant === 'dark'
    }, className)} onClick={onClick}>
        {children}
    </button>
}

export default OnClickBut;