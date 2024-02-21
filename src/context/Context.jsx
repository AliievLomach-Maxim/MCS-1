import { createContext, useContext, useState } from 'react'

export const CustomContext = createContext()
export const useCustomContext = () => useContext(CustomContext)

const ContextProvider = ({ children }) => {
	const [isShowModal, setIsShowModal] = useState(false)
	const toggleModal = () => setIsShowModal((prev) => !prev)

	return (
		<CustomContext.Provider value={{ isAuth: true, toggleModal, isShowModal }}>
			{children}
		</CustomContext.Provider>
	)
}

export default ContextProvider
