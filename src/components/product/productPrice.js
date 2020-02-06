import React, { Component } from 'react';
import FormatCurrency from '../formatCurrency';
class ProductPrice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayedPrice: null
		};
	}

	componentDidMount() {
		this.setPriceRange();
	}

	componentDidUpdate(prevProps) {
		if (this.props.selectedItem !== prevProps.selectedItem) {
			this.updateDisplayedPrice();
			console.log('price update called');
		}
	}

	setPriceRange() {
		let priceRange = this.getPriceRange();
		this.setState({
			displayedPrice: priceRange
		});
	}

	getPriceRange() {
		let maxMinPriceObj = this.getMaxMinPrices();
		let formattedPriceRange = this.formatPriceRange(maxMinPriceObj);
		return formattedPriceRange;
	}

	getMaxMinPrices() {
		let inventoryArray = this.props.inventory;
		let returnObj = {
			//Initialize values with first element's values. This will be used for ItemType P
			maxPrice: inventoryArray[0].node.USD_Price,
			maxListPrice: inventoryArray[0].node.USD_ListPrice,
			minPrice: inventoryArray[0].node.USD_Price,
			minListPrice: inventoryArray[0].node.USD_ListPrice
		};
		if (inventoryArray.length > 1) {
			returnObj.maxPrice = inventoryArray.reduce(
				(maxPrice, elem) => (elem.node.USD_Price > maxPrice ? elem.node.USD_Price : maxPrice),
				returnObj.maxPrice
			);
			returnObj.maxListPrice = inventoryArray.reduce(
				(maxListPrice, elem) =>
					elem.node.USD_ListPrice > maxListPrice ? elem.node.USD_ListPrice : maxListPrice,
				returnObj.maxListPrice
			);
			returnObj.minPrice = inventoryArray.reduce(
				(minPrice, elem) => (elem.node.USD_Price < minPrice ? elem.node.USD_Price : minPrice),
				returnObj.minPrice
			);
			returnObj.minListPrice = inventoryArray.reduce(
				(minListPrice, elem) =>
					elem.node.USD_ListPrice < minListPrice ? elem.node.USD_ListPrice : minListPrice,
				returnObj.minListPrice
			);
		}
		return returnObj;
	}

	formatPriceRange(priceObj) {
		let priceRangeStr = null;
		if (priceObj.maxPrice === priceObj.minPrice && priceObj.maxListPrice === priceObj.minListPrice) {
			//ItemType P
			if (priceObj.maxPrice !== priceObj.maxListPrice || priceObj.minPrice !== priceObj.minListPrice) {
				//One of the extensions is on sale
				priceRangeStr = <span><del><FormatCurrency value={priceObj.minListPrice} /></del><br /><FormatCurrency value={priceObj.minPrice} /></span>;
			} else {
				//Not on sale
				priceRangeStr = <span><FormatCurrency value={priceObj.minListPrice} /></span>;
			}
		} else {
			//ItemType PG
			if (priceObj.maxPrice !== priceObj.maxListPrice || priceObj.minPrice !== priceObj.minListPrice) {
				//One of the extensions is on sale
				priceRangeStr = <span><del><FormatCurrency value={priceObj.minListPrice} /> - <FormatCurrency value={priceObj.maxListPrice} /></del><br /><FormatCurrency value={priceObj.minPrice} /> - <FormatCurrency value={priceObj.maxPrice} /></span>;
			} else {
				//Not on sale
				priceRangeStr = <span><FormatCurrency value={priceObj.maxListPrice} /> - <FormatCurrency value={priceObj.minListPrice} /></span>;
			}
		}
		return priceRangeStr;
	}

	updateDisplayedPrice() {
		let selectedItem = this.props.selectedItem;
		let priceObj = {
			maxListPrice: selectedItem.USD_ListPrice,
			minListPrice: selectedItem.USD_ListPrice,
			maxPrice: selectedItem.USD_Price,
			minPrice: selectedItem.USD_Price
		};
		let displayedPrice = null;
		displayedPrice = this.formatPriceRange(priceObj);
		this.setState({
			displayedPrice: displayedPrice
		});
	}

	render() {
		return this.state.displayedPrice;
	}
}

export default ProductPrice;
