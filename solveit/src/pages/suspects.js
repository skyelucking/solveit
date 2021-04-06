import React, { Component } from "react";
import SuspectTable from "../components/table";
import API from "../utils/API";

class Suspects extends Component {
  state = {
    suspects: [],
    searchArray: [],
    search: "",
    sorted: false,
  };

  componentDidMount() {
    API.search().then((response) => {
        console.log(response.data.results)
      this.setState({
        suspects: response.data.results,
        searchArray: response.data.results,
      });
    });
  }

  sortByName = () => {
    let { suspects, sorted, searchArray } = this.state;
    let sortedArray;
    if (!searchArray === []) {
      sortedArray = searchArray;
    }
    if (!sorted) {
      sortedArray = suspects.reverse();
    }
    this.setState({
      searchArray: sortedArray,
      sorted: !sorted,
      suspects: suspects,
    });
  };

  handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    this.setState({
      search: value,
    });
  };

  searchBar = () => {
    let { suspects } = this.state;
    let newArray = [];
    if (newArray === []) {
      newArray = suspects;
    }
    for (let i = 0; i < suspects.length; i++) {
      if (suspects[i].name.last.toLowerCase().startsWith(this.state.Search)) {
        newArray.push(suspects[i]);
      }
    }

    this.setState({
      searchArray: newArray,
    });
  };

  render() {
    const { suspects = [], search } = this.state;
    console.log(suspects)
    return (
      <div>
        <div className="row input-group mb-3 justify-content-center">
          <div className="col-sm-4">
            <input
              className="form-control"
              type="text"
              placeholder="search"
              area-lable="search suspects"
              onChange={this.handleSearch}
            />
          </div>
          <button className="btn btn-primary" onClick={this.sortByName}>
            {" "}
            Sort
          </button>
        </div>
        <div className="container justify-content-center">
        <header>
            <h1>All Smiles Employee Directory</h1>
          </header>
          <button>Sort</button>
          <button>Filter By Name</button>
          <SuspectTable
            
            suspects={suspects.filter(item => {
                if (!search) return true;
                if (item.name.first.toLowerCase().indexOf(search) !== -1) return true;
                if (item.name.last.toLowerCase().indexOf(search) !== -1) return true;
                return false;
            })}
          />
        </div>
      </div>
    );
  }
}

export default Suspects;
