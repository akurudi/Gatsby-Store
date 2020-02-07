import React from "react"
import { connect } from "react-redux"
import { getCartSubtotal } from "../../state/reducer"
import { Typography } from "antd"
import FormatCurrency from './formatCurrency';

const subTotal = props => (
  <>
    <Typography.Text strong>Subtotal: </Typography.Text>
    <FormatCurrency value={props.subTotal} />
  </>
)

const mapStateToProps = state => {
  return {
    subTotal: getCartSubtotal(state),
  }
}

export default connect(mapStateToProps)(subTotal)
