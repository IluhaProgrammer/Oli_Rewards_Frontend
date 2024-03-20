import { IProduct } from "@/types/product.types"

export interface ProductType {
    name : string
    price : number
    description ?: string
    images ?: string[]
    categoryId : number
    slug ?: string
}

export enum EnumSortFilters {
    HIGHT_PRICE = 'HIGHT_PRICE',
    LOW_PRICE = 'LOW_PRICE',
    NEWEST = 'NEWEST',
    OLDEST = 'OLDEST'
}

export type TypeDataFilters = {
    sort ?: EnumSortFilters
    searchTerm ?: string
    page?: number | string
    limit?: number | string
}

export interface RequsetProductDto {
    products : IProduct[]
    length : number
}

