import React from 'react';
import '../globalStyles.js';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

export default props => (
	<div>
		<Layout>
			<Header style={{ marginBottom: '10px', padding: '0 20px', height: '100%'}}>{props.top}</Header>
			<Content style={{ minHeight: '500px' }}>{props.children}</Content>
			<Footer style={{ background: '#001529', marginTop: '50px', color: 'white' }}>{props.bottom}</Footer>
		</Layout>
	</div>
);
