// import { useCustomContext } from '../../context/Context'
import useFetchProducts from '../../hooks/useFetchProducts'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
	// const { toggleModal } = useCustomContext()
	const { deleteProducts } = useFetchProducts()

	return (
		<div className='card' style={{ width: '18rem' }}>
			<img src={product.thumbnail} className='card-img-top' alt={product.id} />
			<div className='card-body'>
				<h5 className='card-title'>{product.title}</h5>
				<p className='card-text'>{product.description}</p>
				<button
					className='btn btn-primary'
					// onClick={toggleModal}
				>
					{product.price} $
				</button>
				<button className='btn btn-danger' onClick={() => deleteProducts(product.id)}>
					Delete
				</button>
				{/* <Link className='btn btn-success' to='/qwetry/qwertyqwerty/user'>
					qwrety
				</Link> */}
				<Link className='btn btn-success' to={`/products/${product.id}`}>
					Open Details
				</Link>
			</div>
		</div>
	)
}

export default ProductCard

// function name1(params) {
// 	function name2(params) {
// 	}
// 	name2()
// 	return 10
// }
