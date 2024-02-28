import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchProductForm = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [query, setQuery] = useState('')

	useEffect(() => {
		const searchQuery = searchParams.get('search')
		searchQuery && setQuery(searchQuery)
	}, [searchParams])

	const handleSubmit = (e) => {
		e.preventDefault()
		setSearchParams({ search: query })
	}

	const handleChange = ({ target: { value } }) => {
		setQuery(value)
	}

	const handleClear = () => {
		setQuery('')
		setSearchParams({})
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='exampleInputSearch' className='form-label'>
						Search
					</label>
					<input
						type='search'
						className='form-control'
						id='exampleInputSearch'
						name='search'
						value={query}
						onChange={handleChange}
					/>
				</div>

				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
			<button className='btn btn-success' onClick={handleClear}>
				Clear search
			</button>
		</>
	)
}

export default SearchProductForm
