import React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import ConfContainer from "../components/confirmation/confContainer"

export default ({ location }) => {
  return (
    <Layout top={<Header />} bottom={<Footer />}>
      <ConfContainer
        products={location.state ? location.state.products : []}
        subTotal={location.state ? location.state.subTotal : ""}
      />
    </Layout>
  )
}
