import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllProductsApi } from '../../api/products'

// export const getProductsThunk = () => {
// 	return async (dispatch) => {
// 		try {
// 			dispatch(productsSlice.actions.pendingAction())
// 			const data = await getAllProductsApi(0, 10)
// 			dispatch(productsSlice.actions.fulfilledAction(data))
// 		} catch (error) {
// 			dispatch(productsSlice.actions.rejectedAction(error))
// 		}
// 	}
// }

// export const getProductsThunk = createAsyncThunk('allProducts', async (_, thunkAPI) => {
// 	try {
// 		const data = await getAllProductsApi()
// 		return data
// 	} catch (error) {
// 		return thunkAPI.rejectWithValue(error)
// 	}
// })
export const getProductsThunk = createAsyncThunk('products/getAll', () => getAllProductsApi())
export const getSingleProductsThunk = createAsyncThunk('products/getSingle', () =>
	getAllProductsApi()
)
// export const createProductThunk = createAsyncThunk('products/createProduct', () =>
// 	getAllProductsApi()
// )

const handleFulfilledProducts = (state, { payload }) => {
	state.products = payload
	state.isLoading = false
}

const handleFulfilledSingleProduct = (state, { payload }) => {
	state.singleProduct = payload
	state.isLoading = false
}
const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}
const handleRejected = (state, { error }) => {
	state.error = error.message
	state.isLoading = false
}

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		isLoading: false,
		error: '',
		products: null,
		singleProduct: null,
	},
	// extraReducers: {
	// 	[getProductsThunk.fulfilled]: handleFulfilledProducts,
	//     // getName:function (params) {

	//     // },
	//     // getNAme2:()=>{},
	//     // getName3(){}
	// },
	extraReducers: (builder) => {
		builder
			.addCase(getProductsThunk.fulfilled, handleFulfilledProducts)
			.addCase(getSingleProductsThunk.fulfilled, handleFulfilledSingleProduct)
			.addMatcher((action) => action.type.endsWith('pending'), handlePending)
			.addMatcher((action) => action.type.endsWith('rejected'), handleRejected)
	},
})
// const productsSlice = createSlice({
// 	name: 'products',
// 	initialState: {
// 		isLoading: false,
// 		error: '',
// 		products: null,
// 		singleProduct: null,
// 	},
// 	// reducers: {
// 	// 	pendingAction: (state) => {
// 	// 		state.isLoading = true
// 	// 		state.error = ''
// 	// 	},
// 	// 	fulfilledAction: (state, { payload }) => {
// 	// 		state.products = payload
// 	// 		state.isLoading = false
// 	// 	},
// 	// 	rejectedAction: (state, { payload }) => {
// 	// 		state.error = payload.message
// 	// 		state.isLoading = false
// 	// 	},
// 	// },
// 	extraReducers: (builder) => {
// 		builder
// 			// .addCase(getProductsThunk.pending, (state) => {
// 			// 	state.isLoading = true
// 			// 	state.error = ''
// 			// })
// 			.addCase(getProductsThunk.fulfilled, handleFulfilledProducts)
// 			// .addCase(getProductsThunk.rejected, (state, { error }) => {
// 			// 	state.error = error.message
// 			// 	state.isLoading = false
// 			// })
// 			// .addCase(getSingleProductsThunk.pending, (state) => {
// 			// 	state.isLoading = true
// 			// 	state.error = ''
// 			// })
// 			.addCase(getSingleProductsThunk.fulfilled, handleFulfilledSingleProduct)
// 			// .addCase(getSingleProductsThunk.rejected, (state, { error }) => {
// 			// 	state.error = error.message
// 			// 	state.isLoading = false
// 			// })
// 			.addMatcher((action) => action.type.endsWith('pending'), handlePending)
// 			.addMatcher((action) => action.type.endsWith('rejected'), handleRejected)
// 	},
// })

export const productsReducer = productsSlice.reducer
