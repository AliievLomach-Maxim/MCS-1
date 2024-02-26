import { Link, Outlet } from 'react-router-dom'

const UserLayout = () => {
	return (
		<div>
			<header>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/products'>Products</Link>
					</li>
					<li>
						<Link to='/user'>User</Link>
					</li>
				</ul>
			</header>
			<Outlet />
			{/* <Footer/> */}
		</div>
	)
}

export default UserLayout
