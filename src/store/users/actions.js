import { CREATE_NEW_USER, DELETE_USER, UPDATE_USER } from './types'

export const updateUserAction = (body) => {
	return { payload: body, type: UPDATE_USER }
}
export const createNewUsersAction = (body) => {
	return { payload: body, type: CREATE_NEW_USER }
}
export const deleteUserAction = (body) => {
	return { payload: body, type: DELETE_USER }
}
