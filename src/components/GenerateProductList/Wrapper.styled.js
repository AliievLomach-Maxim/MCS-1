import styled from 'styled-components'

export const Wrapper = styled('div')(({ active }) => {
	return {
		width: '300px',
		backgroundColor: active ? 'red' : 'blue',
		img: {
			width: '300px',
		},
		'&.active': {
			backgroundColor: 'green',
		},
	}
})

// export const Wrapper = styled.div`
// 	width: 300px;
// 	background-color: red;
// 	img {
// 		width: 300px;
// 	}
// `

export const Title = styled.h1`
	color: red;
`
