import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import FaqContainer from "../components/faqContainer"

export default ({ data }) => (
  <Layout top={<Header />} bottom={<Footer />}>
    <FaqContainer>{data.contentfulFaQs}</FaqContainer>
  </Layout>
)

export const query = graphql`
	query($slug: String!) {
    contentfulFaQs(slug: {eq: $slug}) {
      slug
      title
      childContentfulFaQsContentRichTextNode {
        json
        nodeType
      }
    }
	}
`;
