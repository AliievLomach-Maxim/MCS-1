import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit'
import { getAllProductsApi } from '../../api/products'

export const getProductsThunk = createAsyncThunk('getAll/products', () => getAllProductsApi(0, 10))
export const getSingleProductsThunk = createAsyncThunk('products/getSingle', () =>
	getAllProductsApi()
)

const handleFulfilledProducts = (state, { payload }) => {
	state.products = payload
	state.isLoading = false
}

const handleFulfilledSingleProduct = (state, { payload }) => {
	state.singleProduct = payload
	state.isLoading = false
}
// const handlePending = (state) => {
// 	state.isLoading = true
// 	state.error = ''
// }
// const handleRejected = (state, { error }) => {
// 	state.error = error.message
// 	state.isLoading = false
// }

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		// isLoading: false,
		// error: '',
		products: null,
		singleProduct: null,
		filterValue: '',
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductsThunk.fulfilled, handleFulfilledProducts)
			.addCase(getSingleProductsThunk.fulfilled, handleFulfilledSingleProduct)
		// .addMatcher(isAnyOf([getProductsThunk.pending,getSingleProductsThunk.pending])), handlePending)
		// .addMatcher((action) => action.type.endsWith('products/pending'), handlePending)
		// .addMatcher((action) => action.type.endsWith('rejected'), handleRejected)
	},
})
export const productsReducer = productsSlice.reducer
