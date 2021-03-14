import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  render() {
    const { todos, toggleTodo, removeTodo } = this.props;

    const todoList = todos.map((todo) => (
      <TodoItem
        todo={todo}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        key={todo.id}
      />
    ));

    return <div>{todoList}</div>;
  }
}

export default TodoItemList;
