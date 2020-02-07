import React from "react"
import { Link } from "gatsby"
import { Row, Col, Carousel, Typography, Tabs, Divider } from "antd"
import Layout from "../components/layout/layout"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import ProductImage from "../components/utils/productImage"

const getSliderImages = () => {
  let imageArray = [
    {
      imagePath: "images/foam-mattress-box-spring-set-CYM-124_lrg.jpg",
      link: "/product/foam-mattress-box-spring-set/",
    },
    {
      imagePath: "images/feather-down-pillow-MAR-108_lrg.jpg",
      link: "/product/feather-down-pillow/",
    },
    {
      imagePath: "images/linen-set-cym-101-ls-tx_lrg.jpg",
      link: "/product/textured-linen-set/",
    },
    {
      imagePath: "images/hygge-throws-CYM-171-02-01_lrg.jpg",
      link: "/product/hygge-throw/",
    },
    {
      imagePath: "images/terry-velour-shawl-robe-MAR-403-TVS-NL_lrg.jpg",
      link: "/product/terry-velour-shawl-robe/",
    },
  ]
  return imageArray.map(elem => (
    <Link to={elem.link}>
      <ProductImage imageName={elem.imagePath} />
    </Link>
  ))
}

export default () => {
  return (
    <Layout top={<Header />} bottom={<Footer />}>
      <Row justify="center" type="flex">
        <Col xs={18} style={{ textAlign: "center" }}>
          <Typography.Title level={1}>Gatsby Online Store</Typography.Title>
        </Col>
      </Row>
      <Divider />
      <Row justify="center" align="middle" type="flex" gutter={16}>
        <Col xs={22} md={4}>
					<Typography.Title level={3}>Dream Big Dreams</Typography.Title>
					<p>Our stylish, soft textured bedding and bath items are perfectly designed to help you relax and recharge.</p>
				</Col>
        <Col xs={22} md={14} lg={12} xl={8}>
          <Carousel effect="fade" dotPosition="right" autoplay>
            {getSliderImages()}
          </Carousel>
        </Col>
      </Row>
			<Divider />
      <Row justify="center" type="flex">
        <Col xs={18} style={{ textAlign: "center"}}>
          <Typography.Title level={3}>
            Everything You Need For Hosting
          </Typography.Title>
        </Col>
      </Row>
      <Row justify="center" type="flex">
        <Col xs={22} md={18} lg={16} xl={12}>
          <Tabs defaultActiveKey="1" tabPosition="left">
            <Tabs.TabPane tab="Plates" key="1">
              <Link to="/product/dinner-plates/">
                <ProductImage imageName="images/Dinner-Plates-CYM-021-02-WH_lrg.jpg" />
              </Link>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Serving Board" key="2">
              <Link to="/product/top-handle-serving-board/">
                <ProductImage imageName="images/Top-Handle-Serving-Board-CYM-027-02_lrg.jpg" />
              </Link>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Oval Bakers" key="3">
              <Link to="/product/oval-bakers/">
                <ProductImage imageName="images/Oval-Bakers-CYM-025-BK_lrg.jpg" />
              </Link>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Hammered Fry Cups" key="4">
              <Link to="/product/hammered-fry-cups/">
                <ProductImage imageName="images/Hammered-Fry-Cups-CYM-026-01-SS_lrg.jpg" />
              </Link>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Wine Glasses" key="5">
              <Link to="/product/wine-glasses/">
                <ProductImage imageName="images/Wine-Glasses-CYM-720-SET2_lrg.jpg" />
              </Link>
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
    </Layout>
  )
}
