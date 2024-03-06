import { createReducer } from '@reduxjs/toolkit'
import { UPDATE_USER, DELETE_USER } from './types'
import { deleteUserAction } from './actions'

// export const usersReducer = (state = { users: null }, { type, payload }) => {
const initialState = { users: null, user: null, page: 1 }

export const usersReducer = (state, { type, payload }) => {
	switch (type) {
		case 'createNewUsers':
			return {
				...state,
				users: payload,
			}
		case UPDATE_USER:
			return {
				...state,
				users: payload,
			}
		case 'deleteUser':
			return {
				...state,
				users: payload,
			}

		default:
			return initialState
	}
}

// export const newUsersReducer = createReducer(initialState, (builder) => {
// 	builder
// 		.addCase(deleteUserAction, (state, { payload }) => {
// 			return {
// 				...state,
// 				user: payload,
// 			}
// 		})
// 		// .addCase()
// })
// export const newUsersReducer = createReducer(initialState, {
// 	[deleteUserAction]: (state, { payload }) => {
// 		return {
// 			...state,
// 			users: payload,
// 		}
// 	},
// })
