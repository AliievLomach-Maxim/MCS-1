const ProductCard = ({ product, handleDelete }) => {
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img src={product.thumbnail} className='card-img-top' alt={product.id} />
			<div className='card-body'>
				<h5 className='card-title'>{product.title}</h5>
				<p className='card-text'>{product.description}</p>
				<button className='btn btn-primary'>{product.price} $</button>
				<button className='btn btn-danger' onClick={() => handleDelete(product.id)}>
					Delete
				</button>
			</div>
		</div>
	)
}

export default ProductCard
