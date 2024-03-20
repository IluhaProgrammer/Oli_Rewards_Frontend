'use clietn'

import { FC, PropsWithChildren, useEffect } from "react";
import { TypeComponentAuthFile } from "./auth.page";
import dynamic from "next/dynamic";
import { UseAuth } from "@/hook/useAuth";
import { useActions } from "@/hook/useActions";
import { usePathname } from "next/navigation";
import { getAccesToken } from "@/services/auth/auth.helper";
import Cookies from "js-cookie";

const DynamicCheckRole = dynamic(() => import('./check-role.page'), {ssr: false})

const AuthProvider : FC<PropsWithChildren<TypeComponentAuthFile>> = ({Component: {
    isOnlyUser
}, children}) => {

    const {user} = UseAuth()
    const {checkAuth, logout} = useActions()

    const pathname = usePathname()

    useEffect(() => {
        const accesToken = getAccesToken()
        if(accesToken) {
            checkAuth()
        }
    }, [])

    useEffect(() => {
        const refreshToken = Cookies.get('refreshToken')
        if(!refreshToken) {
            logout()
        }
    }, [pathname])

    return isOnlyUser ? <DynamicCheckRole Component={{isOnlyUser}}>children</DynamicCheckRole> :  <>{children}</>

}

export default AuthProvider;