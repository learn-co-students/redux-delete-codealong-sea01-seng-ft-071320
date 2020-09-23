import React from "react";

const Todo = ({ id, text, deleteTodo }) => (
  <li>
    {text}
    <button onClick={() => deleteTodo(id)}>DELETE</button>
  </li>
);

export default Todo;
