import React, { Component } from "react";
import "./App.css";
import { Form } from "react-bootstrap";
import HeaderNavbar from "./components/HeaderNavbar";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import * as actionCreator from "./components/actions/Actions";
import logo from "./logo.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRows: [],
      currentRows: [],
      activePage: 1,
      totalItemsCount: "",
      query: "",
      visible: false,
      modalUser: "",
      searchStr: ""
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.newList !== this.props.newList) {
      this.handlePageChange(this.state.activePage);
    }
  }

  handleChange = e => {
    e.preventDefault();
    console.log("Handle change called");
    this.setState({ searchStr: e.target.value });
  };

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
    this.getRowsData(pageNumber);
  }

  getRowsData(pageNumber) {
    let rows = [];
    let tempArray = [...this.props.newList];
    let ul = pageNumber * 20;
    let ll = (pageNumber - 1) * 20;
    if (ul < tempArray.length) {
      rows = tempArray.slice(ll, ul);
    } else if (ul >= tempArray.length) {
      rows = tempArray.slice(ll);
    }
    this.setState({ currentRows: rows });
  }

  render() {
    var newsList = this.state.currentRows;
    const { searchStr } = this.state;

    return (
      <div className="App">
        {/* calling header component and passing props and function */}
        <HeaderNavbar
          pagetitle={"SEARCH THE HUB"}
          show={this.props.showSearch}
          fetchNextPageNews={this.props.fetchNextPageNews}
        />

        <div
          style={
            this.props.showSearch ? { display: "block" } : { display: "none" }
          }
        >
          {/* Main search form */}
          <Form>
            <input
              className="navInput"
              type="text"
              value={searchStr}
              onChange={this.handleChange}
              style={{ width: "35%", border: "2px solid #e4d8d8" }}
              placeholder="Search Topic"
            />
            <button
              className="navOutput"
              onClick={e => this.props.fetchNextPageNews(searchStr, e)}
              style={{
                background: "#c1666b",
                color: "white",
                border: "2px solid #c1666b"
              }}
            >
              Search
            </button>
          </Form>
          <br />

          {/* Suggested topics. Can be converted as independent component */}

          <div
            id="link-tag"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <p onClick={e => this.props.fetchNextPageNews("java", e)}>JAVA</p>
            <p onClick={e => this.props.fetchNextPageNews("javascript", e)}>
              JAVASCRIPT
            </p>
            <p onClick={e => this.props.fetchNextPageNews("react", e)}>REACT</p>
            <p onClick={e => this.props.fetchNextPageNews("python", e)}>
              PYTHON
            </p>
            <p onClick={e => this.props.fetchNextPageNews("ruby", e)}>RUBY</p>
          </div>
        </div>
        {this.props.searchKey && (
          <h4>
            Found {this.props.newList.length} results for:{" "}
            <strong style={{ color: "#c1666b" }}>{this.props.searchKey}</strong>
          </h4>
        )}
        <div
          className="col-md-12 col-sm-12 col-lg-12 col-xs-12"
          style={{
            border: "2px solid #c1666b",
            borderRadius: "20px",
            margin: "1%",
            width: "98%",
            background: "#f7eedc"
          }}
        >
          {newsList &&
            newsList.map(item => (
              <div
                className="col-md-12 col-sm-12 col-lg-12 col-xs-12"
                key={item.id}
                style={{
                  border: "2px solid #c1666b",
                  margin: "5px",
                  borderRadius: "10px",
                  background: "white"
                }}
              >
                <div className="col-md-4 col-sm-4 col-lg-4 col-xs-4">
                  <a
                    href={item.owner.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={
                        item.owner.avatar_url != null
                          ? item.owner.avatar_url
                          : logo
                      }
                      height="50%"
                      width="40%"
                      alt="Thumbnail"
                      style={{
                        margin: "10px",
                        borderRadius: "5px",
                        border: "1px solid #c1666b"
                      }}
                    />{" "}
                  </a>
                </div>
                <div className="col-md-8 col-sm-8 col-lg-8 col-xs-8">
                  <a
                    href={item.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4>{item.name}</h4>
                  </a>
                  {/* setting keyword AKA releated Topics */}
                  <div>
                    <h5>Repo Name: {item.full_name}</h5>
                    <h5>Owner: {item.owner.login}</h5>
                    <h5>Language: {item.language}</h5>
                    <h5>Forks Count: {item.forks}</h5>
                    <h5>start Count: {item.stargazers_count}</h5>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignContent: "flex-end",
                        flexWrap: "wrap"
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div hidden={newsList.length > 0 ? false : true}>
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={20}
            totalItemsCount={this.props.newList.length}
            pageRangeDisplayed={3}
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newList: state.newList,
    showSearch: state.showSearch,
    searchKey: state.searchKey
  };
};

const mapDispachToProps = dispatch => {
  //console.log("searchStr", searchStr);
  return {
    fetchNextPageNews: (searchKey, e) => {
      e.preventDefault();
      dispatch(actionCreator.fetchNextPageNews(searchKey));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
