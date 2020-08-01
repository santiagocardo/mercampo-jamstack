
const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      products: allStrapiProducts {
        nodes {
          strapiId
        }
      }
    }
  `)

  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/productos/${product.strapiId}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: {
        strapiId: product.strapiId,
      },
    })
  })
}