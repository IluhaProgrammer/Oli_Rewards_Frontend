import CategoryPage from "@/components/layots/Categories"
import { ICategory } from "@/types/category.types"

export async function generateStaticParams() {
    return [{slug: 'Kubki'}, {slug: 'Medaly'}, {slug: 'Vasy'}, {slug: 'Nagrady'}, {slug: 'Prizy'}, {slug: 'Statuetky'}, {slug: 'Plaketky'}, {slug: 'Tarelky'}, {slug: 'Figury'}, {slug: 'Figury%20plosky'}, {slug: 'Gramoty'}, {slug: 'postamenty'}]
}

export default function Page({params: {slug}}: {params: {slug: string}}) {
    return <CategoryPage params={{slug}} />
}