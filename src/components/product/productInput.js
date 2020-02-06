import React, { Component } from 'react';
import { InputNumber, Form } from 'antd';
class ProductInput extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleQtyChange = this.handleQtyChange.bind(this);
	}
	handleQtyChange(value) {
		this.props.setQty(value);
	}
	render() {
		return (
			<Form.Item style={{marginBottom: "10px"}}>
				<InputNumber
					disabled={this.state.disableATC}
					min={1}
					max={20}
					defaultValue={this.props.qty}
					onChange={this.handleQtyChange}
				/>
			</Form.Item>
		);
	}
}

export default ProductInput;
