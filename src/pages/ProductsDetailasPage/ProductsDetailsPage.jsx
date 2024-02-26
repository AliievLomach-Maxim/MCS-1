import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSingleProductApi } from '../../api/products'

const ProductsDetailsPage = () => {
	const { productId } = useParams()
	const [product, setProduct] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(() => {
		const getSingleProduct = async () => {
			try {
				setLoading(true)
				setError('')
				const data = await getSingleProductApi(productId)
				setProduct(data)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}
		productId && getSingleProduct()
	}, [productId])

	return loading ? (
		<h1>loading...</h1>
	) : error ? (
		<h1>{error}</h1>
	) : (
		product && (
			<div>
				<h1>{product.title}</h1>
				<p>{product.description}</p>
				<p>{product.price}</p>
			</div>
		)
	)
}

export default ProductsDetailsPage
