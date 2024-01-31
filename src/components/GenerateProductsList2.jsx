const GenerateProductsList2 = (props) =>
	props.data.map((product) => (
		<div className='card' key={product.id} style={{ width: '18rem' }}>
			<img src={product.thumbnail} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>{product.title}</h5>
				<p className='card-text'>{product.description}</p>
				<a href='_' className='btn btn-primary'>
					{product.price}
				</a>
			</div>
		</div>
	))
export default GenerateProductsList2