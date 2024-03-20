
import instance, { axiosClassic } from "@/api/api.onterceper";
import { RequsetProductDto, TypeDataFilters, ProductType } from "./product.interface";
import { IProduct } from "@/types/product.types";

const PRODUCT = 'products'

export const ProductService = {

    async getAll(queryDto = {} as TypeDataFilters) {
        const {data} = await axiosClassic<RequsetProductDto>({
            url: PRODUCT,
            method: 'GET',
            params: queryDto
        })

        return data
    },

    async getById(productId : number | string) {
        return axiosClassic<IProduct>({
            url: `${PRODUCT}/by-id/${productId}`,
            method: 'GET'
        })
    },

    async deleteProduct(productId : string | number) {
        return instance<{message : string}>({
            url: `${PRODUCT}/${productId}`,
            method: 'DELETE'
        })
    },

    async createProduct() {
        return instance<IProduct>({
            url: `${PRODUCT}/add`,
            method: 'POST'
        })
    },

    async updateProduct(productId : string | number, data : ProductType) {
        return instance<IProduct>({
            url: `${PRODUCT}/${productId}`,
            method: 'PUT',
            data
        })
    },

    async getByCategorySlug(categorySlug : string) {
        return axiosClassic<IProduct[]>({
            url: `${PRODUCT}/slug/${categorySlug}`,
            method: 'GET'
        })
    }

}