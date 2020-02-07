import React, { Component } from "react"
import { connect } from "react-redux"
import { graphql, StaticQuery } from "gatsby"
import * as JsSearch from "js-search"
import memoize from "memoize-one"
import { Row, Col, Empty } from "antd"
import MainHeader from "../mainHeader"
import SearchResultSummary from "./searchResultSummary"
import SearchList from "./searchList"

class SearchContainer extends Component {
  buildSearchIndex = memoize(items => {
    const jsSearchObj = new JsSearch.Search("Name")
    jsSearchObj.indexStrategy = new JsSearch.PrefixIndexStrategy()
    jsSearchObj.searchIndex = new JsSearch.TfIdfSearchIndex("Name")
    jsSearchObj.addIndex("Name")
    jsSearchObj.addIndex("ItemID")
    jsSearchObj.addIndex("Descr")
    jsSearchObj.addDocuments(items)
    return jsSearchObj
  })

  render() {
    const jsSearchObj = this.buildSearchIndex(this.props.data)
    const queryResult = jsSearchObj.search(this.props.keyword)
    return (
      <Row justify="center" type="flex">
        <Col xs={22} md={20}>
          <Row style={{ padding: "10px", textAlign: "center" }}>
            <Col>
              <MainHeader name="Search" />
            </Col>
          </Row>
          {this.props.keyword && (
            <Row style={{ padding: "10px", textAlign: "center" }}>
              <Col>
                <SearchResultSummary
                  keyword={this.props.keyword}
                  count={queryResult.length}
                />
              </Col>
            </Row>
          )}
          {queryResult.length > 0 && (
            <Row type="flex" justify="start" gutter={24}>
              <SearchList items={queryResult} />
            </Row>
          )}
          {queryResult.length === 0 && <Empty description="No results found" />}
        </Col>
      </Row>
    )
  }
}

const staticSearchContainer = ({ searchKeyword }) => (
  <StaticQuery
    query={graphql`
      query {
        allItemJson(filter: { User1: { ne: null } }) {
          nodes {
            ItemID
            Name
            Descr
            User1
            Image
          }
        }
      }
    `}
    render={data => <SearchContainer data={data.allItemJson.nodes} keyword={searchKeyword} />}
  />
)

const mapStateToProps = state => {
  return {
    searchKeyword: state.searchKeyword,
  }
}

export default connect(
  mapStateToProps,
  null
)(staticSearchContainer)
