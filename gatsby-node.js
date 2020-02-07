const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allCategoryJson {
        nodes {
          User1
          CategoryID
        }
      }
      allItemJson {
        nodes {
          User1
          ItemID
          Image
        }
      }
    }
  `)
    .then(result => {
      result.data.allCategoryJson.nodes.forEach(node => {
        if (node.User1 !== null) {
          createPage({
            path: "/category/" + node.User1.toLowerCase(),
            component: path.resolve(`./src/templates/category.js`),
            context: {
              CategoryID: node.CategoryID,
              Image: node.Image,
            },
          })
        }
      })
      result.data.allItemJson.nodes.forEach(node => {
        if (node.User1 !== null) {
          createPage({
            path: "/product/" + node.User1.toLowerCase(),
            component: path.resolve(`./src/templates/product.js`),
            context: {
              ItemID: node.ItemID,
              Image: node.Image,
            },
          })
        }
      })
    })
    .catch(err => {
      console.dir(err)
    })
}