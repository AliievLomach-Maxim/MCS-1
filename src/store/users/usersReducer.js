import { UPDATE_USER } from './types'

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
