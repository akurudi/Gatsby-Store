import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Table, InputNumber, Typography, Icon, Row, Col } from 'antd';
import Media from "react-media";
import FormatCurrency from '../utils/formatCurrency';
import ProductImage from "../utils/productImage"

class CartList extends Component {
	render() {
		const regEx = /productgroup.aspx\?|productdetail.aspx\?|product.aspx\?|category.aspx\?|productlist.aspx\?/gi;
		const columns = [
			{
				title: '',
				width: '200px',
				key: 'image',
				hideOnSmall: true,
				render: record => {
					return (
						<Row>
							<Col xs={0} md={24}>
								<ProductImage imageName={record.Image} />
							</Col>
						</Row>
					)
				}
			},
			{
				title: 'Product Name',
				key: 'name',
				render: record => {
					return (
						<div>
							<Link to={'/product/' + record.User1.replace(regEx, '').toLowerCase()}>{record.Name}</Link>
							<br />
							{record.extDesc && (
								<Typography.Text type="secondary" style={{ fontSize: '0.75rem' }}>
									{record.extDesc}
								</Typography.Text>
							)}
						</div>
					);
				}
			},
			{
				title: 'Price',
				key: 'price',
				render: record => <FormatCurrency value={record.USD_Price} />
			},
			{
				title: 'Quantity',
				key: 'qty',
				render: record => (
					<InputNumber
						min={1}
						max={20}
						defaultValue={record.qty}
						onChange={value => this.props.updateProduct(record.InvtID, value)}
					/>
				)
			},
			{
				title: 'Total',
				key: 'total',
				render: record => <FormatCurrency value={record.qty * record.USD_Price} />
			},
			{
				title: '',
				key: 'delete',
				render: record => <Icon type="delete" onClick={() => this.props.deleteProduct(record.InvtID)} />
			}
		];
		const getResponsiveColumns = isXsWidth => columns.filter(({hideOnSmall = false})=> !(isXsWidth && hideOnSmall))
		return (
			<Media query="(max-width: 768px)">
        {isXsWidth => {
          return (
            <Table columns={getResponsiveColumns(isXsWidth)} dataSource={this.props.products} pagination={false} rowKey="InvtID" />
          );
        }}
      </Media>
		)
	}
}

export default CartList;
