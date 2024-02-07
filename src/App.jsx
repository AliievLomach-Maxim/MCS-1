import Header from './components/Header/Header'
// import Counter from './components/Counter/Counter'
import Modal from './components/Modal/Modal'
import { Component } from 'react'
import Products from './components/Products/Products'

class App extends Component {
	state = {
		isShowModal: false,
	}

	toggleModal = () => this.setState((prev) => ({ isShowModal: !prev.isShowModal }))

	render() {
		return (
			<>
				<Header showModal={this.showModal} toggleModal={this.toggleModal} />
				{/* <Counter /> */}
				<Products />
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
