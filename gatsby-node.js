const path = require(`path`);
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return graphql(`
		{
			allCategoryJson {
				edges {
					node {
						User1
						CategoryID
					}
				}
			}
			allItemJson {
				edges {
					node {
						User1
						ItemID
					}
				}
			}
			allContentfulFaQs(filter: { node_locale: { eq: "en-US" } }) {
				edges {
					node {
						slug
					}
				}
			}
		}
	`)
		.then(result => {
			const regEx = /productgroup.aspx\?|productdetail.aspx\?|product.aspx\?|category.aspx\?|productlist.aspx\?/gi;
			result.data.allCategoryJson.edges.forEach(({ node }) => {
				if (node.User1 !== null) {
					createPage({
						path: '/category/' + node.User1.replace(regEx, '').toLowerCase(),
						component: path.resolve(`./src/templates/category.js`),
						context: {
							CategoryID: node.CategoryID
						}
					});
				}
			});
			result.data.allItemJson.edges.forEach(({ node }) => {
				if (node.User1 !== null) {
					createPage({
						path: '/product/' + node.User1.replace(regEx, '').toLowerCase(),
						component: path.resolve(`./src/templates/product.js`),
						context: {
							ItemID: node.ItemID
						}
					});
				}
			});
			result.data.allContentfulFaQs.edges.forEach(({ node }) => {
				if (node.slug !== null) {
					createPage({
						path: node.slug.toLowerCase(),
						component: path.resolve(`./src/templates/faq.js`),
						context: {
							slug: node.slug
						}
					});
				}
			});
		})
		.catch(err => {
			console.dir(err);
		});
};