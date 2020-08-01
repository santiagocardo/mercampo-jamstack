import React from 'react'
import { useStaticQuery } from 'gatsby'
import { useQueryParam, StringParam } from 'use-query-params'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/Card'
import Banner from '../components/banner'

const query = graphql`
  {
    allStrapiProducts {
      nodes {
        name
        default_quantity
        strapiId
        last_price
        price
        quantity_type {
          quantity_type
        }
        description
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

const Busqueda = () => {
  const {
    allStrapiProducts: { nodes: products }
  } = useStaticQuery(query)

  const [keyword] = useQueryParam("producto", StringParam)

  return (
    <Layout>
      <SEO title={keyword} />
      <main className="px-8 lg:px-16 py-6 bg-gray-100">
        <Banner title={`Resultados de búsqueda para ${keyword}...`} />
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {
            products
              .filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()))
              .map(product => <Card key={product.strapiId} {...product} />)
          }
        </div>
      </main>
    </Layout>
  )
}

export default Busqueda
