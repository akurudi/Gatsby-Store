import React from "react"
import { Row, Col } from "antd"
import { Link, StaticQuery } from "gatsby"
import logo from '../../images/shopping-logo.png';

const Footer = ({ faqs }) => (
  <Row>
    <Col xs={11}>
      <h5 className="text-white" style={{ color: "white" }}>
        Contact Us
      </h5>
      <p>
        <span style={{ color: "#8bc5d2" }}>1800-1234-5678</span>
      </p>
      <p style={{ color: "#8bc5d2" }}>
        <span>Mon - Fri: 8am - 11pm EST</span> |{" "}
        <span> Sat - Sun: 9am - 5 pm EST</span>
      </p>
    </Col>
    <Col xs={11}>
      <h5 className="text-white" style={{ color: "white" }}>
        Customer Support
      </h5>
      {faqs.map(faq => {
        return (
          <p key={faq.node.slug}>
            <Link to={`/${faq.node.slug}`} style={{ color: "#8bc5d2" }}>{faq.node.title}</Link>
          </p>
        )
      })}
    </Col>
    <Col xs={2}>
      <img src={logo} alt="logo " style={{ width: '60%' }} />
    </Col>
  </Row>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulFaQs(filter: { node_locale: { eq: "en-US" } }) {
          edges {
            node {
              slug
              title
              content {
                json
              }
            }
          }
        }
      }
    `}
    render={data => <Footer faqs={data.allContentfulFaQs.edges} />}
  />
)
