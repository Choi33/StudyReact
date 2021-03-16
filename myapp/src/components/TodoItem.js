import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  // componentDidMount() {
  //   console.log(props);
  // }

  render() {
    // onRemove
    const { todo, toggleTodo, removeTodo } = this.props;
    return (
      <div
        className="todo-item"
        onClick={() => {
          toggleTodo(todo);
        }}
      >
        <div
          className="remove"
          onClick={(e) => {
            console.log("todos", todo);
            removeTodo(todo);
          }}
        >
          &times;
        </div>
        <div className={`todo-text ${todo.add.checked && "checked"}`}>
          <div>{todo.add.text}</div>
        </div>
        {todo.add.checked && <div className="check-mark">✓</div>}
      </div>
    );
  }
}

export default TodoItem;
