import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import UserLayout from './layouts/UserLayout/UserLayout'
import HomePage from './pages/HomePage/HomePage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import UserPage from './pages/UserPage/UserPage'
import { Suspense, lazy } from 'react'
import TodoPage from './pages/TodoPage/TodoPage'
import GlobalLoader from './components/GlobalLoader/GlobalLoader'

const ProductsDetailsPage = lazy(() => import('./pages/ProductsDetailasPage/ProductsDetailsPage'))

const App = () => {
	return (
		<>
			{/* <Header /> */}
			<GlobalLoader />
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path='products' element={<ProductsPage />} />
					<Route
						path='products/:productId'
						element={
							<Suspense fallback={<h1>loading...</h1>}>
								<ProductsDetailsPage />
							</Suspense>
						}
					/>
					<Route path='todo' element={<TodoPage />} />
				</Route>
				<Route path='/user' element={<UserLayout />}>
					<Route index element={<UserPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
