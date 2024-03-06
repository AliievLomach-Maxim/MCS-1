// import { combineReducers } from 'redux'
import { usersReducer } from './users/usersReducer'
import { numberReducer } from './number/numberReducer'
import { itemsReducer } from './items/itemsReducer'
import { userSliceReducer } from './userSlice/slice'
import { todoReducer } from './todoSlice/slice'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'todos',
	storage,
	blacklist: ['secretKey'],
	// whitelist: ['secretKey'],
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

export const reducer = {
	users: usersReducer,
	number: numberReducer,
	items: itemsReducer,
	usersSlice: userSliceReducer,
	todos: persistedReducer,
}
