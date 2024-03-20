import instance, { axiosClassic } from "@/api/api.onterceper"
import { ICategory } from "@/types/category.types"

const CATEGORY = 'categories'

export const CategoryService = {
    async getAll() {
        return axiosClassic<ICategory[]>({
            url: CATEGORY,
            method: 'GET'
        })
    },

    async getById(id : number | string) {
        return axiosClassic<ICategory>({
            url: `${CATEGORY}/${id}`,
            method: 'GET'
        })
    },

    async deleteCategory(id : number | string) {
        return instance<string>({
            url: `${CATEGORY}/${id}`,
            method: 'DELETE'
        })
    },

    async createCategory() {
        return instance<ICategory>({
            url: CATEGORY,
            method: 'POST'
        })
    },

    async updateCategory(id : number | string, name : string) {
        return instance<ICategory>({
            url: `${CATEGORY}/${id}`,
            method: 'PUT',
            data: {name}
        })
    }

}