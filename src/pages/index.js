import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import AppMockup from "../components/app-mockup"
import TopProducts from "../components/top-products"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <TopProducts />
      <AppMockup />
    </Layout>
  )
}

export default IndexPage
