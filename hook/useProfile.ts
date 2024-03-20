import { UserService } from "@/services/auth/user.service"
import { useQuery } from "@tanstack/react-query"

export const useprofile = () => {

    const {data} = useQuery(['get profile'], () => UserService.getProfile(), {
        select: ({data}) => data
    })

    return {
        profile : data
    }

}