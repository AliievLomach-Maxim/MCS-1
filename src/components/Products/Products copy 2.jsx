import { Component } from 'react'
import CreateProductForm from '../Forms/CreateProductForm'
import ProductList from '../ProductList/ProductList'
import { deleteProductApi, getAllProductsApi } from '../../api/products'
import MyLoader from '../Loader'

const LIMIT = 10

class Products extends Component {
	state = {
		products: null,
		test: 123,
		counter: { count: 0 },
		loading: false,
		error: '',
		page: 1,
	}

	componentDidMount() {
		this.getProducts()
	}

	getProducts = async () => {
		try {
			const offset = this.state.page * LIMIT - LIMIT
			this.setState({ loading: true, error: '' })
			const data = await getAllProductsApi(offset, LIMIT)
			this.setState((prev) => ({ products: prev.products ? [...prev.products, ...data] : data }))
		} catch (error) {
			console.log(error)
			// this.setState({ error: error.message })
			this.setState({ error: error.response.data.message })
		} finally {
			this.setState({ loading: false })
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.page !== this.state.page) {
			this.getProducts()
		}
	}

	handleDelete = async (id) => {
		try {
			this.setState({ loading: true, error: '' })
			await deleteProductApi(id)
		} catch (error) {
			console.log(error)
			this.setState({ error: error.response.data.message })
		} finally {
			this.setState({ loading: false })
		}
	}

	createProduct = (data) => {}

	handleLoadMore = () => {
		this.setState((prev) => ({ page: prev.page + 1 }))
	}

	render() {
		const { loading, products, error } = this.state
		return (
			<>
				<CreateProductForm createProduct={this.createProduct} />
				{/* {loading && <h2>Loading...</h2>} */}
				{loading && <MyLoader />}
				{error && <h2>error: {error}</h2>}
				{products && <ProductList handleDelete={this.handleDelete} products={products} />}
				{products && (
					<button onClick={this.handleLoadMore} className='btn btn-success'>
						Load more...
					</button>
				)}
			</>
		)
	}
}

export default Products
