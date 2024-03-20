'use client'

import { useRouter } from "next/navigation"
import { UseAuth } from "./useAuth"
import { useEffect } from "react"

export const useAuthRedirect = () => {
    
    const {user} = UseAuth()

    const {replace} = useRouter()

    useEffect(() => {
        if(user) {
            replace('/')
        }
    }, [user])

}