import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import Products from './components/Products/Products'
import ContextProvider from './context/Context'
import Home from './components/Home/Home'

const App = () => {
	return (
		<ContextProvider>
			<div className='container'>
				<Header />
				<Home />
				<Products />
				<Modal>some</Modal>
			</div>
		</ContextProvider>
	)
}
export default App
