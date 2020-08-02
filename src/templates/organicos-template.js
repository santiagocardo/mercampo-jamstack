import React from 'react'

import SEO from "../components/seo"
import Layout from "../components/layout"
import Banner from '../components/banner'
import Products from '../components/products'

export const query = graphql`
  query GetAllProducts($skip: Int!, $limit: Int!) {
    allStrapiProducts(limit: $limit, skip: $skip) {
      nodes {
        name
        default_quantity
        strapiId
        last_price
        price
        product_type
        quantity_type {
          quantity_type
        }
        photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const AllProducts = ({
  data: { allStrapiProducts: { nodes: products } },
  pageContext: { numPages, currentPage }
}) => {
  return (
    <Layout>
      <SEO title="Orgánicos" />
      <main className="px-8 lg:px-16 py-6 bg-gray-100">
        <Banner title="Orgánicos 🥦" />
        <Products
          products={products}
          numPages={numPages}
          currentPage={currentPage}
          category="organicos"
        />
      </main>
    </Layout>
  )
}

export default AllProducts
