import React from "react";

import TodoItem from "../TodoItem/TodoItem";

const api_url = `http://localhost:3001/`;

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = this.props.todos;

    const todosItems = todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));

    return <div>{todosItems}</div>;
  }
}

export default TodoList;
