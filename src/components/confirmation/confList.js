import React, { Component } from "react"
import { Table, Typography } from "antd"
import FormatCurrency from "../utils/formatCurrency"

class ConfList extends Component {
  render() {
    const columns = [
      {
        title: "Product Name",
        key: "name",
        render: record => {
          return (
            <div>
              <span>{record.Name}</span>
              <br />
              {record.extDesc && (
                <Typography.Text
                  type="secondary"
                  style={{ fontSize: "0.75rem" }}
                >
                  {record.extDesc}
                </Typography.Text>
              )}
            </div>
          )
        },
      },
      {
        title: "Price",
        key: "price",
        render: record => <FormatCurrency value={record.USD_Price} />,
      },
      {
        title: "Quantity",
        key: "qty",
        render: record => <span>{record.qty}</span>,
      },
      {
        title: "Total",
        key: "total",
        render: record => (
          <FormatCurrency value={record.qty * record.USD_Price} />
        ),
      },
    ]
    return (
      <Table
        columns={columns}
        dataSource={this.props.products}
        pagination={false}
        rowKey="InvtID"
      />
    )
  }
}

export default ConfList
