import { useAppSelector } from "./useTypedSelector"

export const useCart = () => {
    const items = useAppSelector(state => state.cart.items)

    const total = items.reduce(
        (acc, item) => item.quantity * item.price + acc, 0)

    const totalQuantity = items.reduce(
        (acc, item) => item.quantity + acc, 0
    )

    return {
        total,
        items,
        totalQuantity
    }
}