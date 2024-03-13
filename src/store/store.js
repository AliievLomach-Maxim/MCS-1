import persistStore from 'redux-persist/es/persistStore'
import { reducer } from './reducer'
import { configureStore } from '@reduxjs/toolkit'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

// const customMiddleware = (store) => {
// 	return (next) => {
// 		return (action) => {
// 			console.log('store :>> ', store)
// 			if (typeof action === 'function') {
// 				action(store.dispatch)
// 				return
// 			}
// 			next(action)
// 		}
// 	}
// }

export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})
export const persistor = persistStore(store)
