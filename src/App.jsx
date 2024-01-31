import GenerateProductsList from './components/GenerateProductList'
import GenerateProductsList2 from './components/GenerateProductsList2'
import data from './data.json'
import data2 from './data.json'

const App = () => {
	return (
		<>
			<GenerateProductsList data={data} a='qwe' name='qwe' number={123}>
				<div>qwrety</div>
			</GenerateProductsList>
			{/* GenerateProductsList({data:data,a:'qwe',name:'qwe',number:123}) */}
			<GenerateProductsList2 data={data2} />
		</>
	)
}
export default App
