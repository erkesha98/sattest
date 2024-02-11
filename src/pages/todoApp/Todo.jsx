import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../App";
import Login from "../loginApp/Login";
const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const { setIsAuthenticated } = useContext(UserContext);

  //SET TODOS
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = () => {
    console.log("Add clicked");
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, checkbox: false }]);

      setNewTodo("");
    } else {
      alert("Write you todo task");
    }
  };

  const deleteHandler = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };
  const logOutHandler = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="todo-container">
      <div>
        <button onClick={logOutHandler}>Log Out</button>
      </div>
      <br />
      <div>
        <input
          value={newTodo}
          type="text"
          placeholder="write your task..."
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addHandler}>Add</button>
        <ul className="todo-list">
          {todos.map((el, index) => (
            <li key={index}>
              <input className="checkbox" type="checkbox" />
              <span>{el.text}</span>
              <button onClick={() => deleteHandler(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
