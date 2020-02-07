import React, { Component } from "react"
import { Link } from 'gatsby';
import { Row, Col, Modal, Typography, Divider, Button } from "antd"
import { getCartCount } from '../../state/reducer';
import { connect } from 'react-redux';
import FormatCurrency from '../utils/formatCurrency';
import CheckoutBtn from '../utils/checkoutBtn';
import Subtotal from '../utils/subTotal';
import ProductImage from "../utils/productImage"

const ModalContent = (justAddedItem, cartCount) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <Divider>Just added to your cart</Divider>
          </Col>
        </Row>
        <Row type="flex" justify="center" gutter={24}>
          <Col xs={20} sm={12}>
            <ProductImage imageName={justAddedItem.Image} />
          </Col>
          <Col xs={20} sm={12}>
            <h3>{justAddedItem.Name}</h3>
            {justAddedItem.extDesc && (
              <p>
              <Typography.Text type="secondary">
                {justAddedItem.extDesc}
              </Typography.Text>
              </p>
            )}
            <p><Typography.Text strong>Qty: </Typography.Text><Typography.Text type="secondary">{justAddedItem.qty}</Typography.Text></p>
            <p><Typography.Text strong>Price: </Typography.Text><Typography.Text type="secondary"><FormatCurrency value={justAddedItem.USD_Price} /> each</Typography.Text></p>
          </Col>
        </Row>
        <Divider />
        <Row type="flex" justify="space-between">
          <Col style={{'textAlign': 'left'}}>
            {`${cartCount} item(s) in your cart`}
          </Col>
          <Col style={{'textAlign': 'right'}}>
            <Subtotal />
          </Col>
        </Row>
        <Row type="flex" justify="space-between" style={{'paddingTop':'10px'}}>
          <Col style={{'textAlign': 'left'}}>
            <Button>
              <Link to="/cart">View Cart</Link>
            </Button>
          </Col>
          <Col style={{'textAlign': 'right'}}>
            <CheckoutBtn />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

class ProductJustAddedModal extends Component {
  handleCancel = e => {
    this.props.setVisibility(false)
  }
  render() {
    return (
      <Modal
        visible={this.props.visible}
        footer={null}
        onCancel={this.handleCancel}
      >
        {this.props.justAddedItem && ModalContent(this.props.justAddedItem, this.props.cartCount)}
      </Modal>
    )
  }
}

const mapStateToProps = state => {
	return { cartCount: getCartCount(state) };
};

export default connect(mapStateToProps)(ProductJustAddedModal);