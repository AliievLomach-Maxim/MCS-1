import axios from 'axios'

const instanceUsers = axios.create({
	baseURL: 'https://dummyjson.com/',
})

export const getAllUsersApi = async () => {
	const { data } = await instanceUsers(`users`)
	return data
}
