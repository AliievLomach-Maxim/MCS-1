import { Component } from 'react'

class Modal extends Component {
	handleClickEsc = (e) => {
		console.log('click Esc')
		if (e.code === 'Escape') {
			this.props.toggleModal()
		}
	}
	componentDidMount() {
		document.addEventListener('keydown', this.handleClickEsc)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleClickEsc)
	}

	render() {
		const { children, toggleModal } = this.props
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
								// onClick={() => toggleModal(false)}
								onClick={toggleModal}
							></button>
						</div>
						<div className='modal-body'>{children}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Modal
// const Modal = ({ children, hideModal, toggleModal }) => {
// 	return (
// 		<div
// 			className='modal fade show'
// 			style={{ display: 'block', backdropFilter: 'blur(5px)' }}
// 			onClick={toggleModal}
// 		>
// 			<div className='modal-dialog'>
// 				<div className='modal-content'>
// 					<div className='modal-header'>
// 						<h5 className='modal-title'> Modal</h5>
// 						<button
// 							type='button'
// 							className='btn-close'
// 							aria-label='Close'
// 							// onClick={() => toggleModal(false)}
// 							onClick={toggleModal}
// 						></button>
// 					</div>
// 					<div className='modal-body'>{children}</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Modal
