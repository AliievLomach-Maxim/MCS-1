import { Component } from 'react'
// let counter = 0

class Counter extends Component {
	state = {
		counter: 0,
		users: [],
		products: [],
	}

	handleClick = () => {
		this.setState((prevState) => {
			return { counter: prevState.counter + 1, users: [1, 2, 3] }
		})
	}

	handleDecrement = () => {
		this.setState((prevState) => {
			return { counter: prevState.counter - 1 }
		})
	}

	render() {
		console.log('this.state :>> ', this.state)
		return (
			<div className='position-absolute top-50 start-50 translate-middle'>
				<div className='card bg-dark text-white ' style={{ width: '600px' }}>
					<div className='card-body'>
						<h5 className='card-title text-center fs-1'>Counter</h5>
						<p className='card-text  text-center' style={{ fontSize: '80px' }}>
							{this.state.counter}
						</p>
						{/* <a onClick={this.handleClick}>Click</a> */}
						<div className='d-flex justify-content-center px-5'>
							<button className='btn btn-outline-success me-5' onClick={this.handleClick}>
								<i className='bi bi-plus-circle fs-1'></i>
							</button>
							<button className='btn  btn-outline-danger ms-5' onClick={this.handleDecrement}>
								<i className='bi bi-dash-circle fs-1'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Counter

// const handleClick = () => {
// 	counter++
// }

// const btn = document.querySelector('.btn')
// btn.addEventListener('click', handleClick())
// undefined(e)
// let counter = 0
// const Counter = () => {
// 	// const handleClick = () => {
// 	// 	console.log('counter :>> ', counter)
// 	// 	counter++
// 	// }
// 	return (
// 		<div className='position-absolute top-50 start-50 translate-middle'>
// 			<div className='card bg-dark text-white ' style={{ width: '600px' }}>
// 				<div className='card-body'>
// 					<h5 className='card-title text-center fs-1'>Counter</h5>
// 					<p className='card-text  text-center' style={{ fontSize: '80px' }}>
// 						{counter}
// 					</p>
// 					<div className='d-flex justify-content-center px-5'>
// 						<button className='btn btn-outline-success me-5' onClick={handleClick}>
// 							<i className='bi bi-plus-circle fs-1'></i>
// 						</button>
// 						<button className='btn  btn-outline-danger ms-5'>
// 							<i className='bi bi-dash-circle fs-1'></i>
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Counter

// // const handleClick = () => {
// // 	counter++
// // }

// // const btn = document.querySelector('.btn')
// // btn.addEventListener('click', handleClick())
// // undefined(e)
