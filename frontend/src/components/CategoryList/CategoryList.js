import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Grid } from "@material-ui/core";

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      categories: [],
    };
  }

  getCategoriesRecordsApi() {
    const api_url = `/api/v1/categories`;

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
      <Grid item xs sm={6} md={4} key={category.id}>
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
