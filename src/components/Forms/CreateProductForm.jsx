import { Component } from 'react'

class CreateProductForm extends Component {
	state = {
		title: '',
		description: '',
		price: '',
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createProduct(this.state)
		this.setState({ title: '', description: '', price: '' })
	}

	handleChange = ({ target: { name, value } }) => {
		this.setState({ [name]: value })
	}

	render() {
		return (
				<form onSubmit={this.handleSubmit}>
					<div className='mb-3'>
						<label htmlFor='exampleInputEmail1' className='form-label'>
							Title
						</label>
						<input
							type='text'
							className='form-control'
							id='exampleInputEmail1'
							name='title'
							value={this.state.title}
							onChange={this.handleChange}
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='exampleInputDescription' className='form-label'>
							Description
						</label>
						<input
							type='text'
							className='form-control'
							id='exampleInputDescription'
							name='description'
							value={this.state.description}
							onChange={this.handleChange}
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='exampleInputPrice' className='form-label'>
							Price
						</label>
						<input
							type='text'
							className='form-control'
							id='exampleInputPrice'
							name='price'
							value={this.state.price}
							onChange={this.handleChange}
						/>
					</div>

					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
				</form>
		)
	}
}

export default CreateProductForm
