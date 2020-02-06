import React from 'react';
import Layout from '../components/layout/layout';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import SearchContainer from '../components/search/searchContainer';

export default ({ location }) => {
	return (
		<Layout top={<Header />} bottom={<Footer />}>
			<SearchContainer keyword={location.state && location.state.keyword} />
		</Layout>
	);
};