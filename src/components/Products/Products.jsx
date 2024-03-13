import { useEffect, useMemo, useState } from 'react'
import ProductList from '../ProductList/ProductList'
import MyLoader from '../Loader'
import SearchProductForm from '../Forms/SearchProductForm'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../../store/products/thunks'
import {
	selectAllProducts,
	selectFilterValueProducts,
	selectSortedProducts,
} from '../../store/products/selectors'

const Products = () => {
	const [counter, setCounter] = useState(0)

	const { isLoading, error } = useSelector(selectAllProducts)
	const sortedProducts = useSelector(selectSortedProducts)
	// const filterValue = useSelector(selectFilterValueProducts)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getProductsThunk())
	}, [dispatch])

	// const sortedProducts = useMemo(
	// 	() =>
	// 		products?.toSorted((a, b) => {
	// 			console.log('sorting')
	// 			for (let i = 0; i < 10000000; i++) {}
	// 			return a.price - b.price
	// 		}),
	// 	[products]
	// )

	// const filteredProducts = sortedProducts?.filter((el) =>
	// 	el.name.toLowerCase().includes(filterValue.toLowerCase())
	// )

	return (
		<>
			<button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
			{/* <CreateProductForm /> */}
			<SearchProductForm />
			{isLoading && <MyLoader />}
			{error && <h2>error: {error}</h2>}
			{sortedProducts && <ProductList products={sortedProducts} />}
		</>
	)
}

export default Products
