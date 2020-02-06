import React from "react"
import { Button, Form } from "antd"

export default ({ disableATC }) => (
  <Form.Item>
    <Button disabled={disableATC} type="primary" htmlType="submit">
      Add to Cart
    </Button>
  </Form.Item>
)
