import React from "react"
import { Link } from "gatsby"
import { Col, Card } from "antd"
import ProductImage from "../productImage"
const { Meta } = Card
const regEx = /productgroup.aspx\?|productdetail.aspx\?|product.aspx\?|category.aspx\?|productlist.aspx\?/gi

export default ({ items }) => {
  return items.map(node => {
    const link = `/product/${node.User1.replace(regEx, "").toLowerCase()}/`
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
            cover={<ProductImage />}
            style={{ margin: "10px", backgroundColor: "#8bc5d2" }}
          >
            <Meta title={node.Name} />
          </Card>
        </Link>
      </Col>
    )
  })
}
