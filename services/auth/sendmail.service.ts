import { axiosClassic } from "@/api/api.onterceper"
import { ISendMail } from "@/types/sendmail.types"

const SEND = 'sendmail'

export const SendMaileService = {
    async sendMail(dto : ISendMail) {
        return axiosClassic<{message : string}>({
            url: `${SEND}/to`, 
            method: 'POST', 
            data: dto   
        })
    }
}