import React from 'react'
import { useStaticQuery } from 'gatsby'

import SEO from "../components/seo"
import Layout from "../components/layout"
import Banner from '../components/Banner'
import Card from '../components/Card'

const query = graphql`
{
  allStrapiProducts(filter: { product_type: { eq: "frutas" } }) {
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

const Frutas = () => {
  const {
    allStrapiProducts: { nodes: products }
  } = useStaticQuery(query)

  return (
    <Layout>
      <SEO title="Frutas" />
      <main className="px-8 lg:px-16 py-6 bg-gray-100">
        <Banner title="Frutas 🥝" />
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {
            products.map(product => <Card key={product.strapiId} {...product} />)
          }
        </div>
      </main>
    </Layout>
  )
}

export default Frutas
