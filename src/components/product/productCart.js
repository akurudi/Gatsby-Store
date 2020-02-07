import React, { Component } from 'react';
import ProductForm from './productForm';
import ProductPrice from './productPrice';

class ProductCart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			extCodeArr: null,
			selectedItem: null,
			displayOutOfStock: false,
			disableATC: false
		};
		this.setExtensionObj = this.setExtensionObj.bind(this);
	}

	componentDidMount() {
		if(this.props.inventory[0].node.Type === 'P') {
			this.setState({ selectedItem: this.props.inventory[0].node}); //Initialize to first Invt in array so it works with Type = 'P'
		}
	}

	setExtensionObj(newExtensionArr) {
		this.setState(
			{
				extCodeArr: newExtensionArr
			},
			this.setInvtID
		);
	}

	setInvtID() {
		let inventoryArray = this.props.inventory;
		let tmpExtCode = Object.values(this.state.extCodeArr); //-K, -ST, -BL
		let possibleInvtIDArr = this.getPossibleInvtIDs(tmpExtCode);
		for (let i = 0; i < inventoryArray.length; i++) {
			if (possibleInvtIDArr.indexOf(inventoryArray[i].node.InvtID) !== -1) {
				this.setState({
					selectedItem: inventoryArray[i].node
				});
				break;
			}
		}
	}

	getPossibleInvtIDs(inputArr) {
		let ItemID = this.props.inventory[0].node.ItemID;
		let extCombinationArr = [];
		let returnArr = [];
		const permute = (arr, m = []) => {
			if (arr.length === 0) {
				extCombinationArr.push(m);
			} else {
				for (let i = 0; i < arr.length; i++) {
					let curr = arr.slice();
					let next = curr.splice(i, 1);
					permute(curr.slice(), m.concat(next));
				}
			}
		};
		permute(inputArr);
		for (let i = 0; i < extCombinationArr.length; i++) {
			returnArr.push(ItemID + extCombinationArr[i].join(''));
		}
		return returnArr;
	}

	render() {
		return (
			<>
				<span style={{fontWeight: "bold"}}>Price: </span><ProductPrice inventory={this.props.inventory} selectedItem={this.state.selectedItem} />
				<ProductForm
					inventory={this.props.inventory}
					extension={this.props.extension}
					setExtensionObj={this.setExtensionObj}
					selectedItem={this.state.selectedItem}
				/>
			</>
		);
	}
}

export default ProductCart;