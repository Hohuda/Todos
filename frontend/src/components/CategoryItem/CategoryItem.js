import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Add from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

import TodoList from "../TodoList/TodoList";

import "./CategoryItem.css";

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      todos: [],
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameBlur = this.handleNameBlur.bind(this);
  }

  componentDidMount() {
    this.setState((state) => this.props.category);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
      isChanged: true,
    });
  }

  async handleNameBlur(e) {
    const { id, name, isChanged } = this.state;
    const patch_cat_url = `/api/v1/categories/${id}`;

    if (!isChanged) {
      return;
    }
    await fetch(patch_cat_url, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((result) => this.updateCategoryItem(result));
  }

  updateCategoryItem(category) {
    this.setState((state) => category);
  }

  render() {
    const { id, name, todos } = this.state;

    return (
      <div>
        <Card>
          <CardHeader
            title={
              <InputBase
                className="category-name"
                value={name}
                onChange={(e) => this.handleNameChange(e)}
                onBlur={(e) => this.handleNameBlur(e)}
                multiline={true}
              />
            }
            action={
              <IconButton>
                <Add />
              </IconButton>
            }
          ></CardHeader>
          <CardContent>
            <TodoList todos={todos} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default CategoryItem;
