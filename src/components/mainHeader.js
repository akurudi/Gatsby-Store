import React, { Component } from "react"
import { PageHeader } from "antd"

class MainHeader extends Component {
  render() {
    return <PageHeader title={this.props.name} style={{  border: "2px solid #8bc5d2" }}/>
  }
}

export default MainHeader;
