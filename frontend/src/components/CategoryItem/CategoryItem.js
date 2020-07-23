import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Add from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

import TodoItem from "../TodoItem/TodoItem";

import "./CategoryItem.css";

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      default_name: "",
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleNameBlur = this.handleNameBlur.bind(this);
  }

  componentDidMount() {
    const category = this.props.category;
    this.updateCategoryItem(category);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleNameBlur(e) {
    this.setState({
      name: this.state.default_name,
    });
  }

  async handleKeyPress(e) {
    console.log("key pressed", e.key, e.key.keyCode);
    const value = e.target.value;
    const { id, name } = this.state;
    const cat_url = `/api/v1/categories/${id}`;

    if (value) {
      if (e.key === "Enter") {
        const result = await fetch(cat_url, {
          method: "PATCH",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        })
          .then((response) => response.json())
          .then((category) => this.updateCategoryItem(category));
        this.refs.input.blur();
      }
    }
  }

  updateCategoryItem(category) {
    this.setState({
      id: category.id,
      name: category.name,
      default_name: category.name,
    });
  }

  render() {
    const { id, name } = this.state;

    const todos = this.props.category.todos;

    const todosItems = todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));

    return (
      <div>
        <Card>
          <CardHeader
            title={
              <InputBase
                className="category-name"
                value={name}
                onChange={this.handleNameChange}
                onBlur={this.handleNameBlur}
                onKeyPress={this.handleKeyPress}
                multiline={true}
                ref="input"
              />
            }
            action={
              <IconButton>
                <Add />
              </IconButton>
            }
          ></CardHeader>
          <CardContent>
            <div>{todosItems}</div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default CategoryItem;
