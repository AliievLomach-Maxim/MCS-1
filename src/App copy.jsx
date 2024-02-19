import Header from './components/Header/Header'
// import Counter from './components/Counter/Counter'
import Modal from './components/Modal/Modal'
import { Component, useState } from 'react'
import Products from './components/Products/Products'

class App extends Component {
	state = {
		isShowModal: false,
	}

	toggleModal = () => this.setState((prev) => ({ isShowModal: !prev.isShowModal }))

	render() {
		return (
			<div className='container'>
				<Header showModal={this.showModal} toggleModal={this.toggleModal} />
				<Products />
				{this.state.isShowModal && (
					<Modal hideModal={this.hideModal} toggleModal={this.toggleModal}>
						some
					</Modal>
				)}
			</div>
		)
	}
}
export default App
