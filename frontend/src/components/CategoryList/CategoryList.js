import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Grid } from "@material-ui/core";

const api_url = `http://localhost:3001/`;

class CategoryList extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     isLoaded = false,
  //     categories = []
  //   };
  // }

  // componentDidMount(){
  //   fetch(api_url)
  //   .then(response => response.json)
  //   .then(result => {
  //     this.state = {
  //       isLoaded = true,
  //       categories = result
  //     }
  //   })
  // }

  // render(){
  //   const categories = this.state.categories
  //   const categoriesItems = categories.map((category) => {
  //     <li>
  //       <CategoryItem key={category.id} category={category}/>
  //     </li>
  //   })

  //   return(
  //     <div>
  //       <ul>
  //         {categoriesItems}
  //       </ul>
  //     </div>
  //   )
  // }

  render() {
    const categories = [
      { id: 1, name: "first" },
      { id: 2, name: "second" },
      { id: 3, name: "third" },
      { id: 4, name: "fourth" },
      { id: 5, name: "fifth" },
    ];
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
