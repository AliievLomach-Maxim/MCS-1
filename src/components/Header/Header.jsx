import { useContext } from 'react'
import { CustomContext } from '../../context/Context'

const Header = ({ showModal }) => {
	const { toggleModal } = useContext(CustomContext)

	return (
		<nav className='navbar bg-dark mb-3'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1 text-success'>Navbar</span>
				{/* <button className='btn btn-outline-success' onClick={() => toggleModal(true)}> */}
				<button className='btn btn-outline-success' onClick={toggleModal}>
					Open Modal
				</button>
			</div>
		</nav>
	)
}

export default Header
