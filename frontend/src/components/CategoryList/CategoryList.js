import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Grid } from "@material-ui/core";

const origin = "localhost:3001";

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      categories: [],
    };
  }

  getCategoriesRecordsApi() {
    const api_url = `http://${origin}/`;

    fetch(api_url)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          categories: result.categories,
        });
      });
  }

  componentDidMount() {
    this.getCategoriesRecordsApi();
  }

  render() {
    const categories = this.state.categories;
    const categoryItems = categories.map((category) => (
      <Grid item xs={4} key={category.id}>
        <CategoryItem category={category} />
      </Grid>
    ));
    return (
      <div>
        <Grid container spacing={3}>
          {categoryItems}
        </Grid>
      </div>
    );
  }
}

export default CategoryList;
