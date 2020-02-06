import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

class ProductImage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query HeadingQuery {
            file(relativePath: { eq: "coming_soon.png" }) {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <Img fluid={data.file.childImageSharp.fluid} />}
      />
    )
  }
}

export default ProductImage;
