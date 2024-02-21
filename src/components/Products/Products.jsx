
import { useEffect, useMemo, useRef, useState } from 'react'
import CreateProductForm from '../Forms/CreateProductForm'
import ProductList from '../ProductList/ProductList'
import useFetchProducts from '../../hooks/useFetchProducts'
import MyLoader from '../Loader'
import ProductList from '../ProductList/ProductList'

const Products = () => {
	const [page, setPage] = useState(1)

	const { error, getProducts, isLoading, products } = useFetchProducts()

	useEffect(() => {
		getProducts(page)
	}, [getProducts, page])

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
			<input type='text' ref={refObj} />
			<CreateProductForm />
			{/* {loading && <h2>Loading...</h2>} */}
			{isLoading && <MyLoader />}
			{error && <h2>error: {error}</h2>}
			{sortedProducts && <ProductList products={sortedProducts} />}
			{/* {products && (
				<button onClick={handleLoadMore} className='btn btn-success'>
					Load more...
				</button>
			)} */}

		</>
	)
}

export default Products
