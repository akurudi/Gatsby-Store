import React, { Component } from 'react';
import { Radio, Form } from 'antd';
class ProductSelector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			extCodeArr: [],
			extName: [],
			extDescr: ''
		};
		this.handleRoadioClick = this.handleRoadioClick.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
	}

	handleRoadioClick(e, extGroupID) {
		let extCode = e.target.value;
		let tmpExtCodeArr = this.state.extCodeArr; //Get a copy of current extensions
		tmpExtCodeArr[extGroupID] = extCode;
		this.setState(
			{
				extCodeArr: tmpExtCodeArr
			},
			this.props.setExtensionObj(this.state.extCodeArr)
		);
	}

	handleBtnClick(extName, extGroupID) {
		let tmpExtName = this.state.extName;
		tmpExtName[extGroupID] = extName;
		let tmpExtDesc = Object.values(tmpExtName).reduce((extDescr, currExt) => extDescr + ', ' + currExt);
		this.setState(
			{
				extName: tmpExtName
			},
			this.props.setExtDescr(tmpExtDesc)
		);
	}

	render() {
		return this.props.extension.map((extGroup, i) => {
			return (
				<Form.Item style={{marginBottom: "10px"}} label={extGroup.edges[0].node.ExtensionGroupName} key={extGroup.fieldValue}>
					{this.props.getFieldDecorator(extGroup.fieldValue, {
						rules: [
							{
								required: true,
								message: `Please select a ${extGroup.edges[0].node.ExtensionGroupName}`
							}
						]
					})(
						<Radio.Group buttonStyle="solid" onChange={e => this.handleRoadioClick(e, extGroup.fieldValue)}>
							{extGroup.edges.map(ext => {
								return (
									<Radio.Button
										value={ext.node.ExtensionCode}
										key={ext.node.ExtensionCode}
										onClick={() => this.handleBtnClick(ext.node.ExtensionName, extGroup.fieldValue)}
									>
										{ext.node.ExtensionName}
									</Radio.Button>
								);
							})}
						</Radio.Group>
					)}
				</Form.Item>
			);
		});
	}
}

export default ProductSelector;
