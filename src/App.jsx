import Header from './components/Header/Header'
// import Counter from './components/Counter/Counter'
import Modal from './components/Modal/Modal'
import { Component } from 'react'
import ProductList from './components/ProductList/ProductList'

class App extends Component {
	state = {
		isShowModal: false,
	}

	// showModal = () => {
	// 	this.setState({ isShowModal: true })
	// }

	// hideModal = () => {
	// 	this.setState({ isShowModal: false })
	// }

	// toggleModal = (toggle) => {
	// 	if (toggle) this.setState({ isShowModal: true })
	// 	else this.setState({ isShowModal: false })
	// }
	toggleModal = () => this.setState((prev) => ({ isShowModal: !prev.isShowModal }))

	render() {
		return (
			<>
				<Header showModal={this.showModal} toggleModal={this.toggleModal} />
				{/* <Counter /> */}
				<ProductList />
				{this.state.isShowModal && (
					<Modal hideModal={this.hideModal} toggleModal={this.toggleModal}>
						some
					</Modal>
				)}
			</>
		)
	}
}
export default App

// const App = () => {
// 	return (
// 		<>
// 			<Header />
// 			<Counter />
// 			{true&&<Modal>some</Modal>}
// 		</>
// 	)
// }
// export default App
