import axios from 'axios'

axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1/'
// const baseURL = 'https://api.escuelajs.co/api/v1'

export const getAllProductsApi = async (offset, limit) => {
	const { data } = await axios(`products?offset=${offset}&limit=${limit}`)
	return data
}

export const deleteProductApi = async (id) => {
	// const { data } = await axios(`products/${id}`)
	const { data } = await axios.delete('products', { params: { id } })
	return data
}

// export const getAllProductsApiF = async (body) => {
// 	const data = await fetch(`${baseURL}/products`, {
// 		body: JSON.stringify(body),
// 	})
// 	const res = await data.json()
// 	return res
// }
