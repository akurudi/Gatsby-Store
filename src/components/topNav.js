import React from 'react';
import { Menu } from 'antd';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

const regEx = /productgroup.aspx\?|productdetail.aspx\?|product.aspx\?|category.aspx\?|productlist.aspx\?/gi;
export default props => (
	<StaticQuery
		query={graphql`
			query {
				allCategoryJson(filter: { CategoryLevel: { eq: 0 } }, sort: { fields: [sortIndex] }) {
					edges {
						node {
							CategoryName
							User1
						}
					}
				}
			}
		`}
		render={data => (
			<Menu theme="dark" mode="horizontal">
				{data.allCategoryJson.edges.map(({ node }, index) => (
					<Menu.Item key={index}>
						<Link
							to={`/category/${node.User1.replace(regEx, '').toLowerCase()}/`}
							key={index}
							className="nav-link"
							style={{color: "#8bc5d2"}}
						>
							{node.CategoryName}
						</Link>
					</Menu.Item>
				))}
			</Menu>
		)}
	/>
);
