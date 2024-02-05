import { Component } from 'react'
import data from '../../data.json'
import ProductCard from '../ProductCard/ProductCard'

class ProductList extends Component {
	state = {
		products: data,
	}

	handleDelete = (id) => {
		this.setState((prev) => ({
			products: prev.products.filter((el) => el.id !== id),
		}))
	}

	render() {
		return this.state.products.map((product) => (
			<ProductCard key={product.id} product={product} handleDelete={this.handleDelete} />
		))
	}
}

export default ProductList
