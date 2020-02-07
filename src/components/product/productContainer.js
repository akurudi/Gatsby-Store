import React, { Component } from "react"
import { Row, Col, Tabs } from "antd"
import MainHeader from "../mainHeader"
import ProductCart from "./productCart"
import Img from "gatsby-image"
const TabPane = Tabs.TabPane
class ProductContainer extends Component {
  render() {
    return (
      <Row justify="center" type="flex">
        <Col xs={22} md={20}>
          <Row style={{ padding: "10px", textAlign: "center" }}>
            <Col>
              <MainHeader name={this.props.inventory[0].node.Name} />
            </Col>
          </Row>
          <Row
            type="flex"
            className="p-3"
            justify="space-between"
            style={{ padding: "10px" }}
          >
            <Col xs={22} sm={8}>
              <Img fluid={this.props.image} />
            </Col>
            <Col xs={22} sm={12}>
              <ProductCart
                inventory={this.props.inventory}
                extension={this.props.extension}
              />
            </Col>
          </Row>
          <Row className="p-3">
            <Col>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Description" key="1">
                  <div
                    dangerouslySetInnerHTML={{ __html: this.props.inventory[0].node.Descr }}                    
                  />
                </TabPane>
                <TabPane tab="Product Info" key="2">
                  <div
                    dangerouslySetInnerHTML={{ __html: this.props.inventory[0].node.LongDescr }}                    
                  />
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default ProductContainer;
