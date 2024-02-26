import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<React.StrictMode></React.StrictMode>)

// const div = document.createElement('div')
// div.id = 'qrwety'

// const text = React.createElement(
// 	'p',
// 	{
// 		id: '123',
// 	},
// 	'Hello React'
// )

// const div = React.createElement(
// 	'div',
// 	{
// 		id: 'qwrety',
// 		className: 'qwrety',
// 	},
// 	text
// )

// const text = <p id='123'> Hello React</p>
// // `asdjkashd${asd}asd`
// const div = (
// 	<div id='qrwety' className='qwerty'>
// 		{text}
// 	</div>
// )

// console.log('div :>> ', div)

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
// ReactDOM.createRoot(root).render(GenerateProductsList())

// root.append(div)

// function name(params) {
//  return {'10', 10 }
// }
