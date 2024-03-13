import axios from 'axios'

// axios.defaults.baseURL =
// const baseURL = 'https://api.escuelajs.co/api/v1'

const instanceProducts = axios.create({
	baseURL: 'https://api.escuelajs.co/api/v1/',
})

export const getAllProductsApi = async (offset, limit) => {
	const { data } = await instanceProducts(`products?offset=${offset}&limit=${limit}`)
	return data
}

export const getSearchProductsApi = async (query) => {
	const { data } = await instanceProducts(`products/?title=${query}`)
	return data
}

export const getSingleProductApi = async (id) => {
	const { data } = await instanceProducts(`products/${id}`)
	return data
}

export const deleteProductApi = async (id) => {
	// const { data } = await instanceProducts(`products/${id}`)
	const { data } = await instanceProducts.delete('products', { params: { id } })
	return data
}

// export const getAllProductsApiF = async (body) => {
// 	const data = await fetch(`${baseURL}/products`, {
// 		body: JSON.stringify(body),
// 	})
// 	const res = await data.json()
// 	return res
// }
