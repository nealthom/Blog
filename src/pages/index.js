import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm many things living in beautiful Arkansas.</h2>
      <p>
        Need me? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
