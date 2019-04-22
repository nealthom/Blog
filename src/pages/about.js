import React from "react"
import Layout from "../components/Layout"

import { Link } from "gatsby"
import Head from "../components/Head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me</h1>
      <p>A little bit about myself</p>
      <p>
        Reach out to me <Link to="/contact">Here</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
