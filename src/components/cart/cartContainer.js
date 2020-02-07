import React from "react"
import { connect } from "react-redux"
import { updateItem, deleteItem } from "../../state/actions"
import { Row, Col, PageHeader } from "antd"
import CartList from "./cartList"
import CartEmpty from "./cartEmpty"
import CheckoutBtn from "../utils/checkoutBtn"
import Subtotal from "../utils/subTotal"

const CartContainer = ({ cartProducts, updateItem, deleteItem }) => (
  <div>
    <Row justify="center" type="flex">
      <Col xs={22} md={20}>
        <Row style={{ marginBottom: "20px", textAlign: "center" }}>
          <Col>
            <PageHeader title="Cart" />
          </Col>
        </Row>
        <Row>
          <Col>
            {cartProducts.length > 0 ? (
              <CartList
                products={cartProducts}
                updateProduct={updateItem}
                deleteProduct={deleteItem}
              />
            ) : (
              <CartEmpty />
            )}
          </Col>
        </Row>
        {cartProducts.length > 0 ? (
          <Row justify="end" type="flex">
            <Col xs={6}>
              <Row justify="end" type="flex" style={{ padding: "10px" }}>
                <Col>
                  <Subtotal />
                </Col>
              </Row>
              <Row justify="end" type="flex" style={{ padding: "10px" }}>
                <Col>
                  <CheckoutBtn />
                </Col>
              </Row>
            </Col>
          </Row>
        ) : null}
      </Col>
    </Row>
  </div>
)

const mapStateToProps = state => {
  return {
    cartProducts: state.cartProducts,
  }
}

const mapDispatchToProps = { updateItem, deleteItem }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)
