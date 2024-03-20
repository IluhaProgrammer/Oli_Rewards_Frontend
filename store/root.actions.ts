import * as UserActions from './user/user.actions'
import * as CartActions from './cart/cart.slice'

export const allActions = {
    ...UserActions,
    ...CartActions
}