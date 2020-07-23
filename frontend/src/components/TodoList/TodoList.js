import React from "react";

import TodoItem from "../TodoItem/TodoItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = this.props.todos;
    console.log(todos);

    const todosItems = todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));

    return <div>{todosItems}</div>;
  }
}

export default TodoList;
