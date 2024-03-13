export const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}
export const handleRejected = (state, { error }) => {
	state.error = error.message
	state.isLoading = false
}
export const handleFulfilled = (state) => {
	state.isLoading = false
}
