import { todoReducer } from './todoSlice/slice'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { productsReducer } from './products/thunks'
import { usersReducer } from './users/slice'
import { rootReducer } from './root/slice'

const persistConfig = {
	key: 'todos',
	storage,
	blacklist: ['secretKey'],
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

export const reducer = {
	todos: persistedReducer,
	products: productsReducer,
	users: usersReducer,
	root: rootReducer,
}
