const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      products: allStrapiProducts {
        nodes {
          strapiId
          product_type
        }
      }
    }
  `)

  const products = result.data.products.nodes
  const productsPerPage = 12

  const filterByCategory = category => products.filter(product => product.product_type === category)

  // create each product page dynamically
  products.forEach(product => {
    createPage({
      path: `/productos/${product.strapiId}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: {
        strapiId: product.strapiId,
      },
    })
  })

  // create all products pages dynamically (pagination)
  const numPages = Math.ceil(products.length / productsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/organicos` : `/organicos/${i + 1}`,
      component: path.resolve(`src/templates/organicos-template.js`),
      context: {
        limit: productsPerPage,
        skip: i * productsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // create frutas pages dynamically (pagination)
  const numFrutasPages = Math.ceil(filterByCategory('frutas').length / productsPerPage)
  Array.from({ length: numFrutasPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/frutas` : `/frutas/${i + 1}`,
      component: path.resolve(`src/templates/frutas-template.js`),
      context: {
        limit: productsPerPage,
        skip: i * productsPerPage,
        numPages: numFrutasPages,
        currentPage: i + 1,
      },
    })
  })

  // create verduras pages dynamically (pagination)
  const numVerdurasPages = Math.ceil(filterByCategory('verduras').length / productsPerPage)
  Array.from({ length: numVerdurasPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/verduras` : `/verduras/${i + 1}`,
      component: path.resolve(`src/templates/verduras-template.js`),
      context: {
        limit: productsPerPage,
        skip: i * productsPerPage,
        numPages: numVerdurasPages,
        currentPage: i + 1,
      },
    })
  })
}