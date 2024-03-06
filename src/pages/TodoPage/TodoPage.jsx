import { useDispatch, useSelector } from 'react-redux'
import TodoList from '../../components/TodoList/TodoList'
import { createTodo } from '../../store/todoSlice/slice'
import { nanoid } from '@reduxjs/toolkit'

const TodoPage = () => {
	const dispatch = useDispatch()
	const { todos } = useSelector((state) => state.todos)

	const handleSubmit = (e) => {
		e.preventDefault()
		const title = e.target.elements.title.value
		dispatch(
			createTodo({
				id: nanoid(),
				title,
				isChecked: false,
			})
		)
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					Todo title
					<input type='text' name='title' />
				</label>
				<button type='submit'>Create</button>
			</form>
			<TodoList todos={todos} />
		</>
	)
}

export default TodoPage
