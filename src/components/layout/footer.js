import React from "react"
import { Row, Col } from "antd"
import logo from "../../images/shopping-logo.png"

export default () => (
  <Row>
    <Col xs={20}>
      <h5 className="text-white" style={{ color: "white" }}>
        Contact Us
      </h5>
      <p>
        <span style={{ color: "#8bc5d2" }}>1800-1234-5678</span>
      </p>
      <p style={{ color: "#8bc5d2" }}>
        <span>Mon - Fri: 8am - 11pm EST</span> |{" "}
        <span> Sat - Sun: 9am - 5 pm EST</span>
      </p>
    </Col>
    <Col xs={2} style={{ float: "right" }}>
      <img src={logo} alt="logo " style={{ width: "60%" }} />
    </Col>
  </Row>
)
