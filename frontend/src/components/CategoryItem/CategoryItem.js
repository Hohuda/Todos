import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Add from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

import TodoList from "../TodoList/TodoList";

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.getCategory();
  // }

  // getCategory() {
  //   this.setState({
  //     category: this.props.category,
  //   });
  // }

  render() {
    const category = this.props.category;
    // todos = this.state.category.todos;

    return (
      <div>
        <Card>
          <CardHeader
            title={category.name}
            action={
              <IconButton>
                <Add />
              </IconButton>
            }
          ></CardHeader>
          <CardContent>
            <TodoList />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default CategoryItem;
