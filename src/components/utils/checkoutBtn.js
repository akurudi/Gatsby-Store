import React from "react"
import { connect } from "react-redux"
import { deleteState } from "../../state/actions"
import { getCartSubtotal } from "../../state/reducer"
import { Button } from "antd"
import { navigate } from "gatsby"

const handleClick = (e, subTotal, cartProducts, deleteState) => {
  e.preventDefault()
  deleteState()
  navigate("/confirmation/", {
    state: {
      products: cartProducts,
      subTotal: subTotal
    },
  })
}

const CheckoutBtn = ({ subTotal, cartProducts, deleteState }) => (
  <span>
    <Button
      type="primary"
      onClick={e => handleClick(e, subTotal, cartProducts, deleteState)}
    >
      Checkout
    </Button>
  </span>
)

const mapStateToProps = state => {
  return {
    cartProducts: state.cartProducts,
    subTotal: getCartSubtotal(state)
  }
}

const mapDispatchToProps = {
  deleteState,
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutBtn)
