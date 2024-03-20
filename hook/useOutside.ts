import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

interface typeOut {
    ref : any
    isShow : boolean
    setIsShow : Dispatch<SetStateAction<boolean>>
}

export const useOutside = (visible : boolean) : typeOut => {

    const [isShow, setIsShow] = useState<boolean>(visible)
    const ref = useRef<HTMLElement>(null)

    const handleClickOutside = (e : any) => {
        if(ref.current && !ref.current.contains(e.target)) {
            setIsShow(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
    }, [])

    return {
        ref, isShow, setIsShow
    }

}