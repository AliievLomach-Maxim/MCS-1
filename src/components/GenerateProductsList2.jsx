import image from '../assets/Logo_Front Line (1).png'
const GenerateProductsList2 = ({ data, children }) => {
	const isCreate = false
	const isEditing = true

	return data.map((product) => (
		<div className='card' key={product.id} style={{ width: '18rem' }}>
			<img src={product.images ? product.images[0] : image} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>{product.title}</h5>
				<p className='card-text'>{product.description}</p>
				<a href='_' className='btn btn-primary'>
					{product.price}
				</a>
				{false}
				{null}
				{undefined}

				{isCreate ? <button>Create</button> : <button>Save</button>}
				{isEditing && <button>Cancel</button>}
				{children}
			</div>
		</div>
	))
}
export default GenerateProductsList2

// const name = (params) => {
// 	return
// }
