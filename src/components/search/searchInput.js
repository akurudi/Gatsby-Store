import React, { Component } from "react"
import { connect } from "react-redux"
import { updateSearchKeyword } from "../../state/actions"
import { Input, AutoComplete } from "antd"
import { graphql, navigate, StaticQuery } from "gatsby"

const Option = AutoComplete.Option
const regEx = /productgroup.aspx\?|productdetail.aspx\?|product.aspx\?|category.aspx\?|productlist.aspx\?/gi

class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchKeyword: "",
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  getSearchOptions() {
    const searchOptions = this.props.data.allItemJson.group.map(items => (
      <Option
        key={items.edges[0].node.ItemID}
        value={items.edges[0].node.Name}
        data-url={items.edges[0].node.User1}
      >
        {items.edges[0].node.Name}
      </Option>
    ))
    return searchOptions
  }

  handleSelect(value, option) {
    if (option.props["data-url"] !== "") {
      navigate(
        `/product/${option.props["data-url"].toLowerCase().replace(regEx, "")}/`
      )
    } else {
      navigate("/search/")
    }
    console.log("handleSelect " + value)
  }

  handleSearch(value) {
    //this.setState({ searchKeyword: value });
    console.log("handleSearch " + value)
    if(value !== '') {
      navigate("/search/")
    }
  }

  handleChange(value) {
    console.log("handleChange " + value)
    this.props.updateSearchKeyword(value)
  }

  render() {
    return (
      <AutoComplete
        defaultActiveFirstOption={false}
        filterOption={true}
        onSelect={this.handleSelect}
        dataSource={this.getSearchOptions()}
        onChange={this.handleChange}
      >
        <Input.Search
          placeholder="Enter Search Keyword"
          onSearch={this.handleSearch}
          allowClear
          enterButton
        />
      </AutoComplete>
    )
  }
}

const staticSearchInput = ({ searchKeyword, updateSearchKeyword }) => (
  <StaticQuery
    query={graphql`
      query {
        allItemJson(filter: { User1: { ne: null } }) {
          group(field: ItemID) {
            fieldValue
            edges {
              node {
                ItemID
                Name
                User1
              }
            }
          }
        }
      }
    `}
    render={data => (
      <SearchInput
        data={data}
        searchKeyword={searchKeyword}
        updateSearchKeyword={updateSearchKeyword}
      />
    )}
  />
)

const mapStateToProps = state => {
  return {
    searchKeyword: state.searchKeyword,
  }
}

const mapDispatchToProps = { updateSearchKeyword }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(staticSearchInput)
