import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos }) => {
	return (
		todos && (
			<ul>
				{todos.map((todo) => (
					<TodoItem todo={todo} key={todo.id} />
				))}
			</ul>
		)
	)
}

export default TodoList
