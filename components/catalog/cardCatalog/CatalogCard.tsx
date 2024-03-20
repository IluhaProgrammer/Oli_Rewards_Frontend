import { ICategory } from "@/types/category.types";
import { FC } from "react";

interface ICard {
    categories : ICategory[]
}

const CardCatalog : FC<ICard>= ({categories}) => {

    return (
        <div className="" >
            {
                categories.map(category => {
                    return (
                        <div className="text-lg font-medium">
                            {category.name}
                        </div>
                    )
                })
            }
        </div>
    )

}

export default CardCatalog;