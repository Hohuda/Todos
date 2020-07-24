import React from "react";

import Grid from "@material-ui/core/Grid";

import { fetchCategories } from "../../actions/Actions";
import CategoryItem from "../../components/CategoryItem/CategoryItem";

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.handleCategoryItemChange = this.handleCategoryItemChange.bind(this);
  }

  componentDidMount() {
    this.setStateCategories();
  }

  setStateCategories() {
    fetchCategories().then((data) =>
      this.setState({
        categories: data,
      })
    );
  }

  handleCategoryItemChange(category) {
    let categoriesTmp = this.state.categories;
    let index = categoriesTmp.findIndex((x) => x.id === category.id);
    categoriesTmp[index] = category;
    this.setState({
      categories: categoriesTmp,
    });
  }

  render() {
    const categories = this.state.categories;
    const categoryItems = categories.map((category) => (
      <Grid item xs sm={6} md={4} key={category.id}>
        <CategoryItem
          category={category}
          onChange={this.handleCategoryItemChange}
        />
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
