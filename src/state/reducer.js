export const initialState = {
	cartProducts: [],
	searchKeyword: ''
};

export const getCartCount = state => {
	const cartProducts = state.cartProducts;
	if (cartProducts.length === 0) return 0;
	let cartCount = cartProducts.reduce((count, elem) => (count += elem.qty), 0);
	return cartCount;
};

export const getCartSubtotal = state => {
	const cartProducts = state.cartProducts;
	if (cartProducts.length === 0) return 0;
	let cartSubtotal = cartProducts.reduce((subtotal, elem) => (subtotal += elem.qty * elem.USD_Price), 0);
	return cartSubtotal;
};

export default (state = initialState, action) => {
	let updatedCartProducts = [];
	switch (action.type) {
		case `ADD_TO_CART`:
			console.log('ADD_TO_CART received');
			let productInserted = false;
			updatedCartProducts = state.cartProducts.map(elem => {
				if (elem.InvtID === action.product.InvtID) {
					productInserted = true;
					return Object.assign({}, elem, {
						qty: elem.qty + action.product.qty
					});
				}
				return elem;
			});
			if (!productInserted) {
				updatedCartProducts.push(action.product);
			}
			return Object.assign({}, state, {
				cartProducts: updatedCartProducts
			});
		case `UPDATE_ITEM`:
			console.log('UPDATE_ITEM received InvtID: ' + action.InvtID + ' Qty: ' + action.qty);
			updatedCartProducts = state.cartProducts.map(elem => {
				if (elem.InvtID === action.InvtID) {
					return Object.assign({}, elem, {
						qty: action.qty
					});
				}
				return elem;
			});
			return Object.assign({}, state, {
				cartProducts: updatedCartProducts
			});
		case `DELETE_ITEM`:
			console.log('DELETE_ITEM received InvtID: ' + action.InvtID);
			updatedCartProducts = state.cartProducts.filter(elem => elem.InvtID !== action.InvtID);
			return Object.assign({}, state, {
				cartProducts: updatedCartProducts
			});
		case `SET_SEARCH_KEYWORD`:
				console.log('SET_SEARCH_KEYWORD received searchKeyword: ' + action.searchKeyword);
				return Object.assign({}, state, {
					searchKeyword: action.searchKeyword
				});
		default:
			return state;
	}
};
