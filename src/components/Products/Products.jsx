import { useEffect, useState } from 'react'
import ProductList from '../ProductList/ProductList'
// import useFetchProducts from '../../hooks/useFetchProducts'
import MyLoader from '../Loader'
import SearchProductForm from '../Forms/SearchProductForm'
import { getAllProductsApi } from '../../api/products'
import { useDispatch, useSelector } from 'react-redux'
import { createProductThunk, getProductsThunk } from '../../store/products/thunks'

const LIMIT = 10

const Products = () => {
	// const [isLoading, setIsLoading] = useState(false)
	// const [error, setError] = useState('')
	// const [products, setProducts] = useState(null)

	const { products, isLoading, error } = useSelector((store) => store.products)

	const dispatch = useDispatch()

	// const getProducts = async (page = 1) => {
	// 	try {
	// 		const offset = page * LIMIT - LIMIT
	// 		setIsLoading(true)
	// 		setError('')
	// 		const data = await getAllProductsApi(offset, LIMIT)
	// 		setProducts((prev) => (prev ? [...prev, ...data] : data))
	// 	} catch (error) {
	// 		console.log(error)
	// 		setError(error.response.data.message)
	// 	} finally {
	// 		setIsLoading(false)
	// 	}
	// }

	useEffect(() => {
		// getProducts()
		dispatch(getProductsThunk())
		// dispatch(createProductThunk({name,descri,title,age}))
	}, [dispatch])

	return (
		<>
			{/* <CreateProductForm /> */}
			<SearchProductForm />
			{isLoading && <MyLoader />}
			{error && <h2>error: {error}</h2>}
			{products && <ProductList products={products} />}
		</>
	)
}

export default Products
