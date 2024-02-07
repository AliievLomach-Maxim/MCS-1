import { Component } from 'react'
import ProductCard from '../ProductCard/ProductCard'

class ProductList extends Component {
	render() {
		return this.props.products.map((product) => (
			<ProductCard key={product.id} product={product} handleDelete={this.props.handleDelete} />
		))
	}
}

export default ProductList
