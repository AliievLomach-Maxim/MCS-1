import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import UserLayout from './layouts/UserLayout/UserLayout'
import HomePage from './pages/HomePage/HomePage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import UserPage from './pages/UserPage/UserPage'
import ProductsDetailsPage from './pages/ProductsDetailasPage/ProductsDetailsPage'

const App = () => {
	return (
		<>
			{/* <Header /> */}
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path='products' element={<ProductsPage />} />
					<Route path='products/:productId' element={<ProductsDetailsPage />} />
					{/* <Route path='products' element={<ProductsPage />}>
						<Route path=':productId' element={<ProductsDetailsPage />} />
					</Route> */}
				</Route>
				<Route path='/user' element={<UserLayout />}>
					<Route index element={<UserPage />} />
				</Route>
			</Routes>
			{/* <Footer/> */}
		</>
	)
}

export default App
