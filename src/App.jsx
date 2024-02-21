import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import Products from './components/Products/Products'
import ContextProvider from './context/Context'

const App = () => {
	return (
		<ContextProvider>
			<div className='container'>
				<Header />
				<Products />
				<Modal>some</Modal>
			</div>
		</ContextProvider>
	)
}
export default App
