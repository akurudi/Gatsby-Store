import React from 'react';
import Layout from '../components/layout/layout';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import CartContainer from '../components/cart/cartContainer';
export default class Index extends React.Component {
	render() {
		return (
			<Layout top={<Header />} bottom={<Footer />}>
				<CartContainer />
			</Layout>
		);
	}
}