import React from "react";

import TodoItem from "../TodoItem/TodoItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = this.props.todos;

    const todosItems = todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onChange={(e) => this.handleTodoItemChange(e)}
      />
    ));

    return <div>{todosItems}</div>;
  }
}

export default TodoList;
