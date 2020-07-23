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

  // handleTodoItemChange(e) {
  //   let todosTmp = this.state.todos;
  //   let todo = (todosTmp.find((todo) => todo.id === e.target.id).done =
  //     e.target.done);
  //   this.setState({
  //     todos: todosTmp,
  //   });
  // }

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
            <div>{todosItems}</div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default CategoryItem;
