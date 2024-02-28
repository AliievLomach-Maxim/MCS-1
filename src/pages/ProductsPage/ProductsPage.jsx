import { Outlet, useLocation, useSearchParams } from 'react-router-dom'
import Products from '../../components/Products/Products'

const ProductsPage = () => {
	const location = useLocation()
	console.log('location :>> ', location)
	return (
		<>
			<Outlet />
			<Products />
		</>
	)
}

export default ProductsPage
