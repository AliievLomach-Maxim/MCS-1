import { useEffect, useMemo, useRef, useState } from 'react'
import ProductList from '../ProductList/ProductList'
// import useFetchProducts from '../../hooks/useFetchProducts'
import MyLoader from '../Loader'
import SearchProductForm from '../Forms/SearchProductForm'
import { useSearchParams } from 'react-router-dom'
import { getAllProductsApi, getSearchProductsApi } from '../../api/products'

const LIMIT = 10

const Products = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [products, setProducts] = useState(null)

	const [page, setPage] = useState(1)
	const [searchParams, setSearchParams] = useSearchParams()

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

	const query = useMemo(() => searchParams.get('search'), [searchParams])

	useEffect(() => {
		const getSearchProducts = async (query) => {
			try {
				setIsLoading(true)
				setError('')
				const data = await getSearchProductsApi(query)
				setProducts(data)
			} catch (error) {
				console.log(error)
				setError(error.response.data.message)
			} finally {
				setIsLoading(false)
			}
		}
		query ? getSearchProducts(query) : getProducts(page)
	}, [page, query])

	const sortedProducts = useMemo(() => {
		return products?.toSorted((a, b) => {
			return a.price - b.price
		})
	}, [products])

	const refObj = useRef()

	useEffect(() => {
		refObj.current?.focus()
	}, [])

	const handlePage = () => {
		const prevParams = Object.fromEntries([...searchParams])
		setSearchParams({ ...prevParams, page: '1' })
	}

	return (
		<>
			{/* <CreateProductForm /> */}
			<button onClick={handlePage}>SetPage</button>
			<SearchProductForm />
			{isLoading && <MyLoader />}
			{error && <h2>error: {error}</h2>}
			{sortedProducts && <ProductList products={sortedProducts} />}
		</>
	)
}

export default Products
