import persistStore from 'redux-persist/es/persistStore'
import { reducer } from './reducer'
import { configureStore } from '@reduxjs/toolkit'

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

export const store = configureStore({ reducer })
export const persistor = persistStore(store)
