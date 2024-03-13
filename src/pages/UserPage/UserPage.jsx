import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersThunk } from '../../store/users/thunks'
import { selectIsLoadingUsers, selectUsers } from '../../store/users/selectors'

const UserPage = () => {
	const dispatch = useDispatch()

	// const users = useSelector(selectUsers)
	// const isLoading = useSelector(selectIsLoadingUsers)

	useEffect(() => {
		dispatch(getUsersThunk())
	}, [dispatch])

	return <div>UserPage</div>
}

export default UserPage
