import React from "react";

import Grid from "@material-ui/core/Grid";

import Navbar from "./components/Navbar/Navbar";
import CategoryList from "./components/CategoryList/CategoryList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoryList />
    </div>
  );
}

export default App;
