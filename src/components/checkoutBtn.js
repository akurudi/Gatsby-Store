import React from "react"
import { Button } from "antd"

const CheckoutBtn = () => (
  <span>
    <Button type="primary" onClick={e => e.preventDefault()}>
      Checkout
    </Button>
  </span>
)

export default CheckoutBtn;