import { createStore } from 'redux'
import { reducer } from './reducer'

// const reducer = (state, { type, payload }) => {
// 	switch (type) {
// 		case 'updateNumber':
// 			return {
// 				...state,
// 				number: payload,
// 			}
// 		case 'createNewUsers':
// 			return {
// 				...state,
// 				users: payload,
// 			}

// 		default:
// 			return state
// 	}
// }

// export const store = createStore(reducer, { number: 0, items: [], users: null })
export const store = createStore(reducer)
