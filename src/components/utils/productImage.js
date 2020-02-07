import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ data, name }) => {
  let returnVal = <img src="/images/coming_soon.png" alt="Coming Soon" />
  data.forEach(node => {
    if (node.relativePath === name) {
      returnVal = <Img fluid={node.childImageSharp.fluid} />
    }
  })
  return returnVal;
}

const ProductImage = props => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        allFile(filter: { relativePath: { regex: "/images/.*.jpg/" } }) {
          nodes {
            relativePath
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={data => <Image data={data.allFile.nodes} name={props.imageName} />}
  />
)

export default ProductImage
