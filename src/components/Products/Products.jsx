import { Component } from 'react'
import CreateProductForm from '../Forms/CreateProductForm'
import ProductList from '../ProductList/ProductList'
import data from '../../data.json'
import { nanoid } from 'nanoid'
import CreateProductFormWithFormik from '../Forms/CreateProductFormWithFormik'

class Products extends Component {
	state = {
		products: data,
	}

	handleDelete = (id) => {
		this.setState((prev) => ({
			products: prev.products.filter((el) => el.id !== id),
		}))
	}

	createProduct = (data) => {
		// ...some
		const id = nanoid()
		// newData.id = id
		// console.log('newData :>> ', newData)
		// this.setState((prev) => ({
		// 	products: [newData, ...prev.products],
		// }))

		const newData = { ...data, id }
		this.setState((prev) => ({
			products: [newData, ...prev.products],
			// products: prev.products.push(newData),
		}))
		// this.state.products.push(newData)
	}
	render() {
		console.log('this.state :>> ', this.state)
		return (
			<>
				<CreateProductFormWithFormik createProduct={this.createProduct} />
				{/* <CreateProductForm createProduct={this.createProduct} /> */}
				<ProductList handleDelete={this.handleDelete} products={this.state.products} />
			</>
		)
	}
}

export default Products
