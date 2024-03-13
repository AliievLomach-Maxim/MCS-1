import { createSelector } from '@reduxjs/toolkit'

export const selectAllProducts = (store) => store.products
export const selectFilterValueProducts = (store) => store.products.filterValue

export const selectSortedProducts = (store) => {
	return store.products.products?.toSorted((a, b) => {
		console.log('sorting...')
		return a.price - b.price
	})
}

// export const productsSelector = createSelector(
// 	selectFilterValueProducts,
// 	selectSortedProducts,
// 	(filterValue, sortedProducts) => {
// 		return sortedProducts?.filter((el) => el.name.includes(filterValue))
// 	}
// )
