import Header from './components/Header/Header'
// import Counter from './components/Counter/Counter'
import Modal from './components/Modal/Modal'
import { Component, useState } from 'react'
import Products from './components/Products/Products'

// function useState() {
// 	return [el,function]
// }

const App = () => {
	const [isShowModal, setIsShowModal] = useState(false)

	// const toggleModal = () => setIsShowModal(!isShowModal)
	const toggleModal = () => setIsShowModal((prev) => !prev)

	return (
		<div className='container'>
			<Header toggleModal={toggleModal} />
			<Products />
			{isShowModal && <Modal toggleModal={toggleModal}>some</Modal>}
		</div>
	)
}
export default App

// let user = {
// 	name:'Alex'
// }
// user.name = 'Bob'

// user = {
// 	name:'Bob'
// }
