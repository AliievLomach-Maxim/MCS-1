import { useCallback, useContext, useEffect, useState } from 'react'
import { CustomContext } from '../../context/Context'

const Modal = ({ children }) => {
	const [counter, setCounter] = useState(0)
	const { toggleModal, isShowModal } = useContext(CustomContext)

	const handleClickEsc = useCallback(
		(e) => {
			if (e.code === 'Escape') {
				toggleModal()
			}
		},
		[toggleModal]
	)

	useEffect(() => {
		document.addEventListener('keydown', handleClickEsc)
		return () => {
			document.removeEventListener('keydown', handleClickEsc)
		}
	}, [handleClickEsc])


	return (
		isShowModal && (
			<div className='modal fade show' style={{ display: 'block', backdropFilter: 'blur(5px)' }}>
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
						<button onClick={handleClickEsc}>qwe</button>
					</div>
				</div>
			</div>
		)
	)
}
export default Modal
