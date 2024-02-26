// import { useContext } from 'react'
// import { CustomContext } from '../../context/Context'
import { Link, NavLink } from 'react-router-dom'

const Header = ({ showModal }) => {
	// const { toggleModal } = useContext(CustomContext)

	return (
		<nav className='navbar bg-dark mb-3'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1 text-success'>Navbar</span>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/products'>Products</NavLink>
					</li>
					<li>
						<NavLink to='/user'>User</NavLink>
					</li>
				</ul>
				{/* <button className='btn btn-outline-success' onClick={() => toggleModal(true)}> */}
				{/* <button className='btn btn-outline-success' onClick={toggleModal}>
					Open Modal
				</button> */}
			</div>
		</nav>
	)
}

export default Header
