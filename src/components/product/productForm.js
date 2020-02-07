import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../state/actions';
import { Row, Col, Form } from 'antd';
import ProductSelector from './productSelector';
import ProductInput from './productInput';
import ProductStockMsg from './productStockMsg';
import ProductATCBtn from './productATCBtn';
import ProductJustAddedModal from './productJustAddedModal'

class InnerProductForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			qty: 1,
			disableATC: false,
			extDesc: '',
			showModal: false,
			modalItem: null,
			outOfStockMessage: 'Out of stock!' //Move to parent comp
		};
		this.setQty = this.setQty.bind(this);
		this.setATCState = this.setATCState.bind(this);
		this.setExtDescr = this.setExtDescr.bind(this);
		this.setModalVisibility = this.setModalVisibility.bind(this);
	}

	setQty(value) {
		this.setState({
			qty: value
		});
	}

	setATCState(value) {
		this.setState({
			disableATC: value
		});
	}

	setExtDescr(value) {
		this.setState({
			extDesc: value
		});
	}

	setModalVisibility(value) {
		this.setState({
			showModal: value
		});
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				const selectedItem = Object.assign({}, this.props.selectedItem, {
					qty: this.state.qty,
					extDesc: this.state.extDesc
				});
				this.props.addToCart(selectedItem);
				this.setState({ 
					showModal:true,
					modalItem: selectedItem
				});
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form layout="horizontal" onSubmit={this.handleSubmit} className="product-form">
				{this.props.extension && (
					<ProductSelector
						getFieldDecorator={getFieldDecorator}
						setExtDescr={this.setExtDescr}
						extension={this.props.extension}
						setExtensionObj={this.props.setExtensionObj}
					/>
				)}
				<ProductInput setQty={this.setQty} qty={this.state.qty} />
				<Row>
					<Col xs={4}>
						<ProductStockMsg
							inventory={this.props.inventory}
							selectedItem={this.props.selectedItem}
							outOfStockMessage={this.state.outOfStockMessage}
							setATCState={this.setATCState}
						/>
					</Col>
				</Row>
				<ProductATCBtn disableATC={this.state.disableATC} />
				<ProductJustAddedModal visible={this.state.showModal} setVisibility={this.setModalVisibility} justAddedItem={this.state.modalItem} />
			</Form>
		);
	}
}

const mapDispatchToProps = {
	addToCart
};

const connectedForm = connect(
	null,
	mapDispatchToProps
)(InnerProductForm);

export default Form.create({ name: 'product-form' })(connectedForm);
