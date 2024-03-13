import { createSlice } from '@reduxjs/toolkit'
import { getUsersThunk } from './thunks'
import { handleFulfilledUsers, handlePending, handleRejected } from './handlers'

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		// isLoading: false,
		// error: '',
		users: null,
	},
	extraReducers: (builder) => {
		builder.addCase(getUsersThunk.fulfilled, handleFulfilledUsers)
		// .addMatcher((action) => action.type.endsWith('users/pending'), handlePending)
		// .addMatcher((action) => action.type.endsWith('rejected'), handleRejected)
	},
})
export const usersReducer = usersSlice.reducer
