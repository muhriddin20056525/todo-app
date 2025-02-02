import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./components/TodoItem";
import toast, { Toaster } from "react-hot-toast";
import notFoundImg from "./assets/not-found.svg";

export default function App() {
  const [data, setData] = useState([
    {
      id: uuidv4(),
      text: "This is Todo App",
    },
  ]);

  const [todo, setTodo] = useState("");

  // add todo item
  const addTodo = () => {
    if (!todo) {
      toast.error("Please fill in the field!", { duration: 1500 });
      return;
    }

    const newTodoItem = {
      id: uuidv4(),
      text: todo,
    };

    setData((prev) => [...prev, newTodoItem]);
    setTodo("");
  };

  // delete todo item
  const deleteTodoItem = (id) => {
    let filterData = data.filter((item) => item.id !== id);
    setData(filterData);
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-header">
          <input
            type="text"
            placeholder="Enter your todo"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button onClick={addTodo}>Add</button>
        </div>

        <div className="todo-body">
          {data.length ? (
            data.map((item) => (
              <TodoItem
                key={item.id}
                {...item}
                deleteTodoItem={deleteTodoItem}
              />
            ))
          ) : (
            <div className="not-found">
              <img src={notFoundImg} alt="" />
            </div>
          )}
        </div>
      </div>
      <Toaster position="top-center" />
    </>
  );
}
