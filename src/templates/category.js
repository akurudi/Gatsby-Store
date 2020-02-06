import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import CategoryContainer from "../components/categoryContainer"

export default ({ data }) => (
  <Layout top={<Header />} bottom={<Footer />}>
    <CategoryContainer data={data} />
  </Layout>
)

export const query = graphql`
  query($CategoryID: String!) {
    allCategoryItemJson(filter: { CategoryID: { eq: $CategoryID } }) {
      edges {
        node {
          CategoryName
          ItemName
          User1
          ItemID
          ItemType
        }
      }
    }
  }
`
