import { useAppSelector } from "./useTypedSelector"

export const UseAuth = () => useAppSelector(state => state.user)