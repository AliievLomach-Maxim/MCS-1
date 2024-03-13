import { useSelector } from 'react-redux'
import { GlobalLoadingSelector } from '../../store/root/selectors'

const GlobalLoader = () => {
	const isLoading = useSelector(GlobalLoadingSelector)
	return isLoading ? <h1>LOading...</h1> : null
}

export default GlobalLoader
