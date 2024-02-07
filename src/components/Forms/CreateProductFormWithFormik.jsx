import { Field, Form, Formik } from 'formik'

const CreateProductFormWithFormik = ({ createProduct }) => {
	return (
		<>
			<Formik
				initialValues={{
					title: '',
					description: '',
					price: '',
				}}
				onSubmit={(dataObj) => createProduct(dataObj)}
			>
				{() => {
					return (
						<Form>
							<Field name='title' />
							<Field name='description' />
							<Field name='price' />

							<button type='submit' className='btn btn-primary'>
								Submit
							</button>
						</Form>
					)
				}}
			</Formik>
			{/* <Formik
				initialValues={{
					title: '',
					description: '',
					price: '',
				}}
				onSubmit={(dataObj) => createProduct(dataObj)}
			>
				{(formik) => {
					console.log('formik :>> ', formik)
					return (
						<form onSubmit={formik.handleSubmit}>
							<div className='mb-3'>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									Title
								</label>
								<input
									type='text'
									className='form-control'
									id='exampleInputEmail1'
									name='title'
									value={formik.values.title}
									onChange={formik.handleChange}
								/>
							</div>
							<div className='mb-3'>
								<label htmlFor='exampleInputDescription' className='form-label'>
									Description
								</label>
								<input
									type='text'
									className='form-control'
									id='exampleInputDescription'
									name='description'
									value={formik.values.description}
									onChange={formik.handleChange}
								/>
							</div>
							<div className='mb-3'>
								<label htmlFor='exampleInputPrice' className='form-label'>
									Price
								</label>
								<input
									type='text'
									className='form-control'
									id='exampleInputPrice'
									name='price'
									value={formik.values.price}
									onChange={formik.handleChange}
								/>
							</div>

							<button type='submit' className='btn btn-primary'>
								Submit
							</button>
						</form>
					)
				}}
			</Formik> */}
		</>
	)
}

export default CreateProductFormWithFormik
