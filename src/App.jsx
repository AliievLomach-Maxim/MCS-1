import GenerateProductsList from './components/GenerateProductList/GenerateProductList'
import GenerateProductsList2 from './components/GenerateProductsList2'
import data from './data.json'
import data2 from './data.json'
import styles from './App.module.css'

const App = () => {
	return (
		<div className={styles.container} id={styles.some}>
			<GenerateProductsList data={data} a='qwe' name='qwe' number={123}>
				<div>qwrety</div>
			</GenerateProductsList>
			<GenerateProductsList2 data={data2} />
		</div>
	)
}
export default App
