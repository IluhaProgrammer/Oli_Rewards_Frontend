'use client'

import { FC, PropsWithChildren } from "react";
import { TypeComponentAuthFile } from "./auth.page";
import { UseAuth } from "@/hook/useAuth";
import {useRouter, usePathname } from "next/navigation";

export const CheckRole : FC<PropsWithChildren<TypeComponentAuthFile>> = ({Component: {
    isOnlyUser
}, children}) => {

    const {user} = UseAuth()

    const {replace} = useRouter()

    const pathname = usePathname()

    if(user && isOnlyUser) {
        return <>{children}</>
    }

    pathname !== '/auth' && replace('/auth')

    return null

}

export default CheckRole;