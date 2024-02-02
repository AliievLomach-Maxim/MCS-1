import image from '../../assets/Logo_Front Line (1).png'
import { Title, Wrapper } from './Wrapper.styled'

const GenerateProductsList = ({ data, children }) => {
	return data.map((product) => (
		<Wrapper key={product.id} active={Boolean(product.images)}>
			<img src={product.images ? product.images[0] : image} alt='...' />
			<div>
				<Title>{product.title}</Title>
				<p>{product.description}</p>
				<a href='_'>{product.price}</a>
			</div>
		</Wrapper>
	))
}
export default GenerateProductsList

// import image from '../../assets/Logo_Front Line (1).png'
// import someStyles from './GenerateProductList.module.css'
// import classNames from 'classnames'

// const GenerateProductsList = ({ data, children }) => {
// 	return data.map((product) => (
// 		<div
// 			// className={`${someStyles.container} ${
// 			// 	product.images ? someStyles.active : someStyles.notActive
// 			// }`}
// 			// className={classNames('container')}
// 			className={classNames(someStyles.container, {
// 				[someStyles.active]: product.images,
// 				[someStyles.notActive]: !product.images,
// 			})}
// 			key={product.id}
// 		>
// 			<img src={product.images ? product.images[0] : image} alt='...' />
// 			<div>
// 				<h5>{product.title}</h5>
// 				<p>{product.description}</p>
// 				<a href='_'>{product.price}</a>
// 			</div>
// 		</div>
// 	))
// }
// export default GenerateProductsList

// import image from '../../assets/Logo_Front Line (1).png'
// import './GenerateProductList.styled.css'

// const generatedClassNames = (params) => {
// 	return params ? 'active' : 'notActive'
// }

// const GenerateProductsList = ({ data, children }) => {
// 	return data.map((product) => (
// 		<div className={`container ${generatedClassNames(product.images)}`} key={product.id}>
// 			<img src={product.images ? product.images[0] : image} alt='...' />
// 			<div className={`main ${generatedClassNames(product.title)}`}>
// 				<h5>{product.title}</h5>
// 				<p>{product.description}</p>
// 				<a href='_'>{product.price}</a>
// 			</div>
// 		</div>
// 	))
// }
// export default GenerateProductsList

// import image from '../assets/Logo_Front Line (1).png'
// const GenerateProductsList = ({ data, children }) => {
// 	const obj = {
// 		textAlign: 'center',
// 		padding: '12px',
// 	}
// 	return data.map((product) => (
// 		<div className='card' key={product.id} style={{ textAlign: 'center', backgroundColor: 'red' }}>
// 			<img src={product.images ? product.images[0] : image} className='card-img-top' alt='...' />
// 			<div className='card-body' style={obj}>
// 				<h5 className='card-title'>{product.title}</h5>
// 				<p className='card-text'>{product.description}</p>
// 				<a href='_' className='btn btn-primary'>
// 					{product.price}
// 				</a>
// 			</div>
// 		</div>
// 	))
// }
// export default GenerateProductsList
