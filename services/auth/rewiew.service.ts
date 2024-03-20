
import instance, { axiosClassic } from "@/api/api.onterceper"
import { IReview, IReviewCreate } from "@/types/rewiew.types"

const REWIEW = 'rewiews'

export const RewiewService = {

    async getAll() {
        return axiosClassic<IReview[]>({
            url: `${REWIEW}/all`,
            method: 'GET'
        })
    },

    async getAvgRating() {
        return axiosClassic<number>({
            url: `${REWIEW}/avg`,
            method: 'GET'
        })
    },

    async createRewiew(dto : IReviewCreate) {
        return instance<{message : string}>({
            url: `${REWIEW}/create`,
            method: 'POST',
            data: dto
        })
    }

}