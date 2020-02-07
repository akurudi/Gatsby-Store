import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import ProductContainer from "../components/product/productContainer"

export default ({ data }) => (
  <Layout top={<Header />} bottom={<Footer />}>
    <ProductContainer
      inventory={data.allItemJson.edges}
      extension={data.allItemExtensionJson && data.allItemExtensionJson.group}
      image={data.file.childImageSharp.fluid}
    />
  </Layout>
)

export const query = graphql`
  query($ItemID: String!, $Image: String!) {
    file(relativePath: { eq: $Image }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allItemJson(filter: { ItemID: { eq: $ItemID } }) {
      edges {
        node {
          ItemID
          InvtID
          Name
          User1
          Type
          Descr
          LongDescr
          stkItem
          qtyAvail
          USD_ListPrice
          USD_Price
          Image
        }
      }
    }
    allItemExtensionJson(
      filter: { ItemID: { eq: $ItemID } }
      sort: { fields: ExtensionCode }
    ) {
      group(field: ExtensionGroupID) {
        fieldValue
        totalCount
        edges {
          node {
            ExtensionGroupID
            ExtensionName
            ExtensionCode
            SortIndex
            ExtensionGroupName
          }
        }
      }
    }
  }
`
