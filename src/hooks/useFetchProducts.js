import { useEffect, useState } from 'react'
import { deleteProductApi, getAllProductsApi } from '../api/products'

const LIMIT = 10

const useFetchProducts = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [products, setProducts] = useState(null)

	const getProducts = async (page) => {
		try {
			const offset = page * LIMIT - LIMIT
			setIsLoading(true)
			setError('')
			const data = await getAllProductsApi(offset, LIMIT)
			setProducts((prev) => (prev ? [...prev, ...data] : data))
		} catch (error) {
			console.log(error)
			setError(error.response.data.message)
		} finally {
			setIsLoading(false)
		}
	}

	const deleteProducts = async (id) => {
		try {
			setIsLoading(true)
			setError('')
			await deleteProductApi(id)
		} catch (error) {
			console.log(error)
			setError(error.response.data.message)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		getProducts(1)
	}, [])

	return { getProducts, products, isLoading, error, deleteProducts }
}

export default useFetchProducts
