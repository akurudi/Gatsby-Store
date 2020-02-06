import React from 'react';
import { Empty } from 'antd';
import Layout from '../components/layout/layout';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
export default class Index extends React.Component {
	render() {
		return (
			<Layout top={<Header />} bottom={<Footer />}>
				<Empty />
			</Layout>
		);
	}
}
