import { useCustomContext } from '../../context/Context'
import useFetchProducts from '../../hooks/useFetchProducts'

const ProductCard = ({ product }) => {
	const { toggleModal } = useCustomContext()
	const { deleteProducts } = useFetchProducts()

	return (
		<div className='card' style={{ width: '18rem' }}>
			<img src={product.thumbnail} className='card-img-top' alt={product.id} />
			<div className='card-body'>
				<h5 className='card-title'>{product.title}</h5>
				<p className='card-text'>{product.description}</p>
				<button className='btn btn-primary' onClick={toggleModal}>
					{product.price} $
				</button>
				<button className='btn btn-danger' onClick={() => deleteProducts(product.id)}>
					Delete
				</button>
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
