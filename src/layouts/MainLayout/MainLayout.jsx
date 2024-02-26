import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
	return (
		<div>
			<Header />
			{/* <SideBar/> */}
			<Outlet />
			{/* <Footer/> */}
			{/* {children} */}
		</div>
	)
}

export default MainLayout
