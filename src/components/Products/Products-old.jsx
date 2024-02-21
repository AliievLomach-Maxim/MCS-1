import { useEffect, useMemo, useRef, useState } from 'react'
import { deleteProductApi, getAllProductsApi } from '../../api/products'
import CreateProductForm from '../Forms/CreateProductForm'
import MyLoader from '../Loader'
import ProductList from '../ProductList/ProductList'

const LIMIT = 10

const Products = () => {
	const [counter, setCounter] = useState(0)
	const [products, setProducts] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const [page, setPage] = useState(1)

	// useEffect(() => {
	// 	getProducts()
	// }, [])

	useEffect(() => {
		const getProducts = async () => {
			try {
				const offset = page * LIMIT - LIMIT
				setLoading(true)
				setError('')
				const data = await getAllProductsApi(offset, LIMIT)
				setProducts((prev) => (prev ? [...prev, ...data] : data))
			} catch (error) {
				console.log(error)
				setError(error.response.data.message)
			} finally {
				setLoading(false)
			}
		}
		getProducts()
	}, [page])

	const handleDelete = async (id) => {
		try {
			setLoading(true)
			setError('')
			await deleteProductApi(id)
		} catch (error) {
			console.log(error)
			setError(error.response.data.message)
		} finally {
			setLoading(false)
		}
	}

	const createProduct = (data) => {}

	const handleLoadMore = () => setPage((prev) => prev + 1)

	// const sortedProducts = products?.toSorted((a, b) => {
	// 	console.log('sorting')
	// 	return a.price - b.price
	// })

	const sortedProducts = useMemo(() => {
		return products?.toSorted((a, b) => {
			console.log('sorting')
			return a.price - b.price
		})
	}, [products])

	const refObj = useRef()

	useEffect(() => {
		refObj.current?.focus()
	}, [])

	return (
		<>
			<button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
			<input type='text' ref={refObj} />
			<CreateProductForm createProduct={createProduct} />
			{/* {loading && <h2>Loading...</h2>} */}
			{loading && <MyLoader />}
			{error && <h2>error: {error}</h2>}
			{sortedProducts && <ProductList handleDelete={handleDelete} products={sortedProducts} />}
			{products && (
				<button onClick={handleLoadMore} className='btn btn-success'>
					Load more...
				</button>
			)}
		</>
	)
}

export default Products
