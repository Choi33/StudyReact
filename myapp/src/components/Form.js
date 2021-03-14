import React, { useState } from "react";
import "./Form.css";

const Form = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    addTodo(input);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // 엔터가 눌렸음.
      handleAddTodo();
    }
  };

  const handleClick = () => {
    handleAddTodo();
  };

  return (
    <div className="form">
      <input
        value={input}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <div
        className="create-button"
        onClick={handleClick}
        onKeyPress={handleKeyPress}
      >
        등록
      </div>
    </div>
  );
};

export default Form;
