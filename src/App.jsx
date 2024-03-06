import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import UserLayout from './layouts/UserLayout/UserLayout'
import HomePage from './pages/HomePage/HomePage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import UserPage from './pages/UserPage/UserPage'
// import ProductsDetailsPage from './pages/ProductsDetailasPage/ProductsDetailsPage'
import { Suspense, lazy, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserAction } from './store/users/actions'
import TodoPage from './pages/TodoPage/TodoPage'

const ProductsDetailsPage = lazy(() => import('./pages/ProductsDetailasPage/ProductsDetailsPage'))

const App = () => {
	const { users } = useSelector((state) => state.users)
	const dispatch = useDispatch()
	console.log('users :>> ', users)

	useEffect(() => {
		// dispatch({ payload: [1, 2, 3], type: UPDATE_USER })
		dispatch(updateUserAction([1, 2, 3]))
	}, [dispatch])

	return (
		<>
			{/* <Header /> */}
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
