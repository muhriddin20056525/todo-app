import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function TodoItem({ id, text, deleteTodoItem }) {
  return (
    <div className="todo-item">
      <h2>{text}</h2>
      <button className="todo-icon" onClick={() => deleteTodoItem(id)}>
        <FaRegTrashAlt className="icon" />
      </button>
    </div>
  );
}
