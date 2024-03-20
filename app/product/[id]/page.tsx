import ProductIdPage from "@/components/layots/Products"
import { ICategory } from "@/types/category.types"
import { IProduct } from "@/types/product.types"

export async function generateStaticParams() {
    return [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}, {id: '6'}, {id: '7'}, {id: '8'}]
}

export default function Page({params: {id}}: {params: {id: string | number}}) {
    return <ProductIdPage params={{id}} />
}