import persistStore from 'redux-persist/es/persistStore'
import { reducer } from './reducer'
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({reducer})
export const persistor = persistStore(store)

// import { reducer } from './reducer'
// import { configureStore } from '@reduxjs/toolkit'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
// 	key: 'root',
// 	storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

// export const store = configureStore({
// 	reducer: persistedReducer,
// })

// // ----

// export const persistor = persistStore(store)
