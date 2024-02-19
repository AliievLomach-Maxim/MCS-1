// import { Component } from 'react'

import { useEffect, useState } from 'react'

// class Modal extends Component {
// 	handleClickEsc = (e) => {
// 		console.log('click Esc')
// 		if (e.code === 'Escape') {
// 			this.props.toggleModal()
// 		}
// 	}
// 	componentDidMount() {
// 		document.addEventListener('keydown', this.handleClickEsc)
// 	}

// 	componentWillUnmount() {
// 		document.removeEventListener('keydown', this.handleClickEsc)
// 	}

// 	render() {
// 		const { children, toggleModal } = this.props
// 		return (
// 			<div
// 				className='modal fade show'
// 				style={{ display: 'block', backdropFilter: 'blur(5px)' }}
// 			>
// 				<div className='modal-dialog'>
// 					<div className='modal-content'>
// 						<div className='modal-header'>
// 							<h5 className='modal-title'> Modal</h5>
// 							<button
// 								type='button'
// 								className='btn-close'
// 								aria-label='Close'
// 								onClick={toggleModal}
// 							></button>
// 						</div>
// 						<div className='modal-body'>{children}</div>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default Modal
const Modal = ({ children, toggleModal }) => {
	const [counter, setCounter] = useState(0)

	// cdm
	useEffect(() => {
		const handleClickEsc = (e) => {
			console.log('click Esc')
			if (e.code === 'Escape') {
				toggleModal()
			}
		}
		document.addEventListener('keydown', handleClickEsc)
		// cwu
		return () => {
			document.removeEventListener('keydown', handleClickEsc)
		}
	}, [toggleModal])

	// cdm + cdu
	useEffect(() => {
		console.log('Update counter')
	}, [counter])
	// cdu
	useEffect(() => {
		if (counter > 0) {
			console.log('Update counter')
		}
	}, [counter])

	// componentDidUpdate(prevProps, prevState) {
	// if(prevState.counter!==this.state.counter){
	// console.log('Update counter')
	// }
	// }

	// cdm + cdu without if()
	useEffect(() => {
		console.log('Update')
	})

	return (
		<div
			className='modal fade show'
			style={{ display: 'block', backdropFilter: 'blur(5px)' }}
			// onClick={toggleModal}
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'> Modal</h5>
						<button
							type='button'
							className='btn-close'
							aria-label='Close'
							onClick={toggleModal}
						></button>
					</div>
					<button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
					<div className='modal-body'>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
