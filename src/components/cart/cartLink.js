import React from 'react';
import { getCartCount } from '../../state/reducer';
import { Link } from 'gatsby';
import { Icon, Badge } from 'antd';
import { connect } from 'react-redux';

const CartBadge = ({ cartCount }) => (
	<Badge count={cartCount} title="Cart">
		<Link to="/cart">
			<Icon type="shopping-cart" style={{ color: 'white', fontSize: '26px' }} />
		</Link>
	</Badge>
);

const mapStateToProps = state => {
	return { cartCount: getCartCount(state) };
};

export default connect(mapStateToProps)(CartBadge);
