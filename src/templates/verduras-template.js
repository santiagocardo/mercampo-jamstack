import React from 'react'

import SEO from "../components/seo"
import Layout from "../components/layout"
import Banner from '../components/banner'
import Products from '../components/products'

export const query = graphql`
  query GetAllVerduras($skip: Int!, $limit: Int!) {
    allStrapiProducts(filter: {product_type: {eq: "verduras"}}, limit: $limit, skip: $skip) {
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

const Verduras = ({
  data: { allStrapiProducts: { nodes: products } },
  pageContext: { numPages, currentPage }
}) => {
  return (
    <Layout>
      <SEO title="Verduras" />
      <main className="px-8 lg:px-16 py-6 bg-gray-100">
        <Banner title="Verduras 🥬" />
        <Products
          products={products}
          numPages={numPages}
          currentPage={currentPage}
          category="verduras"
        />
      </main>
    </Layout>
  )
}

export default Verduras
