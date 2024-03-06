import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
	name: 'todos',
	initialState: { todos: [], secretKey: 'qwerty' },
	reducers: {
		createTodo: (state, { payload }) => {
			state.todos.push(payload)
		},
		deleteTodo: (state, { payload }) => {
			state.todos = state.todos.filter((el) => el.id !== payload)
		},
		updateTodo: (state, { payload }) => {
			state.todos = state.todos.map((el) => {
				if (el.id === payload.id) {
					return { ...el, ...payload }
				} else return el
			})
		},
	},
})

export const todoReducer = todoSlice.reducer

export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions
