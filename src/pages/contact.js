import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Reach out to me. I would love to hear from you.</p>
      <p>
        Reach me on{" "}
        <a href="https://www.twitter.com/nealthom" target="_blank">
          Twitter
        </a>{" "}
        or{" "}
        <a href="https://www.facebook.com/thomas.b.neal" target="_blank">
          Facebook
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
