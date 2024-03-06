import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'users',
	initialState: { users: [], currentUser: null },
	reducers: {
		createUser: (state, { payload }) => {
			// return {
			// 	...state,
			// 	users: payload,
			// }
			state.users.push(payload)
		},
		deleteUser: (state, { payload }) => {
			state.users = state.users.filter((el) => el.id !== payload)
		},
		updateUser: (state, { payload }) => {
			// some code
		},
		createCurrentUser: (state, { payload }) => {
			state.currentUser = payload
		},
		updateCurrentUser: (state, { payload }) => {
			// state.currentUser =
		},
	},
})

export const userSliceReducer = userSlice.reducer

export const { createUser } = userSlice.actions
