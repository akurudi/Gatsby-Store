import React from "react"
import { Link } from "gatsby"
import { Row, Col, Card} from "antd"
import ProductImage from "./utils/productImage"
import MainHeader from "./mainHeader"

const { Meta } = Card

export default ({category}) => (
  <Row justify="center" type="flex">
    <Col xs={22} md={20}>
      <Row style={{ padding: "10px", textAlign: "center" }}>
        <Col>
          <MainHeader name={category.nodes[0].CategoryName} />
        </Col>
      </Row>
      <Row type="flex" justify="start" gutter={24}>
        {category.nodes.map( node => {
          const link =
            node.ItemType === "Category"
              ? `/category/${node.User1.toLowerCase()}/`
              : `/product/${node.User1.toLowerCase()}/`
          return (
            <Col
              key={node.ItemID}
              xs={24}
              sm={8}
              lg={6}
              className="gutter-row"
              allign="middle"
            >
              <Link to={link} className="nav-link">
                <Card
                  hoverable
                  cover={<ProductImage imageName={node.Image} />}
                  style={{ margin: "10px", backgroundColor: "#8bc5d2" }}
                >
                  <Meta title={node.ItemName} />
                </Card>
              </Link>
            </Col>
          )
        })}
      </Row>
    </Col>
  </Row>
)
