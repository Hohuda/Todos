import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Add from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

import { updateCategory } from "../../actions/Actions";
import TodoItem from "../TodoItem/TodoItem";

import "./CategoryItem.css";

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: "",
      defaultName: "",
      todos: [],
    };
    this.handleTodoItemChange = this.handleTodoItemChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameKeyPress = this.handleNameKeyPress.bind(this);
    this.handleNameBlur = this.handleNameBlur.bind(this);
  }

  componentDidMount() {
    this.getState();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props)
      this.setState({
        defaultName: this.state.name,
      });
  }

  getState() {
    const { id, name, todos } = this.props.category;
    this.setState({
      id: id,
      name: name,
      defaultName: name,
      todos: todos,
    });
    this.inputRef = React.createRef();
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  async handleNameKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const { id, name } = this.state;
      const category = { id, name };
      await updateCategory(category).then((category) =>
        this.props.onChange(category)
      );
      this.inputRef.current.blur();
    }
  }

  handleNameBlur(e) {
    this.setState({
      name: this.state.defaultName,
    });
  }

  handleTodoItemChange(todo) {
    let todosTmp = this.state.todos;
    let index = todosTmp.findIndex((x) => x.id === todo.id);
    todosTmp[index] = todo;
    this.setState({
      todos: todosTmp,
    });
  }

  render() {
    const name = this.state.name;
    const todos = this.state.todos;

    const todoItems = todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onChange={this.handleTodoItemChange}
      />
    ));

    return (
      <div>
        <Card>
          <CardHeader
            title={
              <InputBase
                inputRef={this.inputRef}
                className="category-name"
                value={name}
                onChange={this.handleNameChange}
                onBlur={this.handleNameBlur}
                onKeyDown={this.handleNameKeyPress}
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
            <div>{todoItems}</div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default CategoryItem;
