import { Component } from 'react'
import CreateProductForm from '../Forms/CreateProductForm'
import ProductList from '../ProductList/ProductList'
import data from '../../data.json'
import { nanoid } from 'nanoid'
// import CreateProductFormWithFormik from '../Forms/CreateProductFormWithFormik'

class Products extends Component {
	state = {
		products: null,
		// products: [],
		test: 123,
		counter: { count: 0 },
	}

	componentDidMount() {
		const localData = localStorage.getItem('products')
		if (localData) {
			this.setState({ products: JSON.parse(localData) })
		} else {
			this.setState({ products: data })
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.products?.length !== this.state.products.length) {
			localStorage.setItem('products', JSON.stringify(this.state.products))
		}

		// if (prevState.products.length > this.state.products.length) {
		// 	console.log('successfully deleted product!')
		// }
		// if (prevState.products.length < this.state.products.length) {
		// 	console.log('successfully added product!')
		// }
	}

	handleDelete = (id) => {
		this.setState((prev) => ({
			products: prev.products.filter((el) => el.id !== id),
			counter: { count: prev.counter.count + 1 },
		}))
	}

	createProduct = (data) => {
		const id = nanoid()

		const newData = { ...data, id }
		this.setState((prev) => ({
			products: [newData, ...prev.products],
		}))
	}
	render() {
		// console.log('this.state :>> ', this.state)
		return (
			<>
				<button
					onClick={() => this.setState((prev) => ({ counter: { count: prev.counter.count + 1 } }))}
				>
					click
				</button>
				{/* <CreateProductFormWithFormik createProduct={this.createProduct} /> */}
				<CreateProductForm createProduct={this.createProduct} counter={this.state.counter} />
				{this.state.products && (
					<ProductList handleDelete={this.handleDelete} products={this.state.products} />
				)}
			</>
		)
	}
}

export default Products
