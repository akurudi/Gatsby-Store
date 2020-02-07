import * as types from './actionTypes';

export const addToCart = product => ({
	type: types.ADD_TO_CART,
	product
});

export const updateItem = (InvtID, qty) => ({
	type: types.UPDATE_ITEM,
	InvtID,
	qty
});

export const deleteItem = InvtID => ({
	type: types.DELETE_ITEM,
	InvtID
});

export const updateSearchKeyword = searchKeyword => ({
	type: types.SET_SEARCH_KEYWORD,
	searchKeyword
});

export const deleteState = () => ({
	type: types.DELETE_STATE,
});
