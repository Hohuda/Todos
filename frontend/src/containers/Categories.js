import React from "react";

import Grid from "@material-ui/core/Grid";

import Navbar from "../components/Navbar/Navbar";
import CategoryList from "../components/CategoryList/CategoryList";

class Categories extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <CategoryList />
      </div>
    );
  }
}

export default Categories;
