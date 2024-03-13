export const handleFulfilledUsers = (state, { payload }) => {
	state.users = payload
	state.isLoading = false
}

// export const handlePending = (state) => {
// 	state.isLoading = true
// 	state.error = ''
// }
// export const handleRejected = (state, { error }) => {
// 	state.error = error.message
// 	state.isLoading = false
// }
