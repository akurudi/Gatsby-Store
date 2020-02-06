import React from 'react';
import { Typography } from "antd"

export default ({keyword, count}) => {
  return (
    <Typography.Text strong>Search for <Typography.Text code>{keyword.toUpperCase()}</Typography.Text> resulted in  <Typography.Text code>{count}</Typography.Text> results.</Typography.Text>
  )
}