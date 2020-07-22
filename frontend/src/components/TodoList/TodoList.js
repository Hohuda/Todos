import React from "react";

import TodoItem from "../TodoItem/TodoItem";

const api_url = `http://localhost:3001/`;

class TodoList extends React.Component {
  render() {
    const todos = [
      { id: 1, title: "First", description: "First todo's description" },
      { id: 2, title: "Second", description: "Second todo's description" },
      { id: 3, title: "Third", description: "Third todo's description" },
      { id: 4, title: "Fourth", description: "Fourth todo's description" },
      { id: 5, title: "Fifth", description: "Fifth todo's description" },
    ];
    const todosItems = todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));

    return <div>{todosItems}</div>;
  }
}

export default TodoList;
