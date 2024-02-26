import { Outlet } from 'react-router-dom'
import Products from '../../components/Products/Products copy 2'

const ProductsPage = () => {
	return (
		<>
			<Outlet />
			<Products />
		</>
	)
}

export default ProductsPage
