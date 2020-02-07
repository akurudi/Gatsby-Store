import React from "react"
import { Link } from "gatsby"
import { Col, Card } from "antd"
import ProductImage from "../utils/productImage"
const { Meta } = Card

export default ({ items }) => {
  return items.map(node => {
    const link = `/product/${node.User1.toLowerCase()}/`
    return (
      <Col
        key={node.ItemID}
        xs={24}
        sm={12}
        md={8}
        xl={4}
        allign="middle"
      >
        <Link to={link} className="nav-link">
          <Card
            hoverable
            cover={<ProductImage imageName={node.Image} />}
            style={{ margin: "10px", backgroundColor: "#8bc5d2" }}
          >
            <Meta title={node.Name} />
          </Card>
        </Link>
      </Col>
    )
  })
}
