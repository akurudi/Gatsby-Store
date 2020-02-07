import React, { Component } from 'react';
import { Alert } from 'antd';
class ProductStockMsg extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayOutOfStock: false
		};
	}

	componentDidMount() {
		this.checkAllInvtIDStock();
	}

	componentDidUpdate(prevProps) {
		if (this.props.selectedItem !== prevProps.selectedItem) {
			this.checkInvtIDStock();
		}
	}

	checkAllInvtIDStock() {
		let inventoryArray = this.props.inventory;
		if (inventoryArray[0].node.stkItem === 1) {
			//Check only for non-drop-ship items.
			if (inventoryArray[0].node.Type === 'P') {
				if (inventoryArray[0].node.qtyAvail === 0) {
					this.setState(
						{
							displayOutOfStock: true
						},
						this.props.setATCState(true)
					);
				} else {
					this.setState({
						selectedItem: inventoryArray[0].node //Set InvtID for Type = P
					});
				}
			} else {
				let allInvtIDOutOfStock = false;
				allInvtIDOutOfStock = inventoryArray.every(currArr => {
					return currArr.node.qtyAvail <= 0;
				});
				if (allInvtIDOutOfStock) {
					this.setState(
						{
							displayOutOfStock: true
						},
						this.props.setATCState(true)
					);
				}
			}
		}
	}

	checkInvtIDStock() {
		let selectedItem = this.props.selectedItem;
		if (selectedItem.stkItem === 1 && selectedItem.qtyAvail <= 0) {
			this.setState(
				{
					displayOutOfStock: true
				},
				this.props.setATCState(true)
			);
		} else {
			this.setState(
				{
					displayOutOfStock: false
				},
				this.props.setATCState(false)
			);
		}
	}

	render() {
		return (
			<>
				{this.state.displayOutOfStock && (
					<Alert message={this.props.outOfStockMessage} type="warning" style={{ marginBottom: '10px' }} />
				)}
			</>
		);
	}
}

export default ProductStockMsg;
