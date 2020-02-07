import React, { Component } from "react"
import { PageHeader } from "antd"

class MainHeader extends Component {
  render() {
    return <PageHeader title={this.props.name} style={{ float: "none" }}/>
  }
}

export default MainHeader;
