import { combineReducers } from 'redux'
import { usersReducer } from './users/usersReducer'
import { numberReducer } from './number/numberReducer'
import { itemsReducer } from './items/itemsReducer'

export const reducer = combineReducers({
	users: usersReducer,
	number: numberReducer,
	items: itemsReducer,
})
