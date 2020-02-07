import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'gatsby';
import TopNav from '../topNav';
import SearchInput from '../search/searchInput';
import CartLink from '../cart/cartLink';
import logo from '../../images/shopping-logo.png';

export default () => (
	<Row type="flex" align="middle" justify="space-between">
		<Col xs={4} sm={2}>
			<Link to="/">
				<img src={logo} alt="logo " style={{ width: '50%' }} />
			</Link>
		</Col>
		<Col xs={20} sm={20} md={20} lg={16}>
			<TopNav />
		</Col>
		<Col xs={18} sm={8} lg={4}>
			<SearchInput />
		</Col>
		<Col xs={2} style={{ textAlign: 'center' }}>
			<CartLink />
		</Col>
	</Row>
);
