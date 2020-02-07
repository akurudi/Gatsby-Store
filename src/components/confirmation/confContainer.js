import React from "react"
import { Row, Col, PageHeader, Empty } from "antd"
import ConfList from "./confList"
import { Typography } from "antd"
import FormatCurrency from '../utils/formatCurrency';

const getRandomOrder = () => {
  return Math.floor(Math.random() * 100000)
}

const ConfContainer = ({ products, subTotal }) => {
  return (
    <div>
      <Row justify="center" type="flex">
        <Col xs={22} md={20}>
          <Row style={{ marginBottom: "20px", textAlign: "center" }}>
            <Col>
              <PageHeader title="Order Confirmation Page" />
            </Col>
          </Row>
          {products.length > 0 ? (
            <>
              <Row>
                <Col>
                  <h3 style={{ marginLeft: "25px" }}>
                    Thank you for your order. Order #: O{getRandomOrder()}
                  </h3>
                </Col>
              </Row>
              <Row justify="center" type="flex">
                <Col xs={23}>
                  <ConfList products={products} />
                </Col>
              </Row>
            </>
          ) : (
            <Empty />
          )}
        </Col>
      </Row>
      {products.length > 0 ? (
        <Row justify="end" type="flex" style={{ padding: "10px" }}>
          <Col xs={6}>
            <Typography.Text strong>Subtotal: </Typography.Text>
            <FormatCurrency value={subTotal} />
          </Col>
        </Row>
      ) : null}
    </div>
  )
}

export default ConfContainer
