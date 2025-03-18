import React, { useState } from "react";

let globalId = 0;
const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([{ name: "task 1", id: ++globalId }]);

  const handleTodoInput = (ev) => {
    const inputValue = ev.target.value;
    setTodo(inputValue);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    setTodos((prev) => [
      ...prev,
      { name: todo, id: prev[prev.length - 1].id + 1 },
    ]);
  };

  const handleToDoDelete = (todoId) => {
    setTodos(todos.filter((item) => item.id !== todoId));
  };

  return (
    <div>
      <h1>To Dos</h1>
      <form onSubmit={handleFormSubmit}>
        <input name="todo" value={todo} onChange={handleTodoInput} />
        <input type="submit" value="Add to do" />
      </form>
      <ul>
        {/* using array method as we can't write for loop or logical expressions inside jsx curly braces */}
        {todos.map((toDoItem, toDoKey) => (
          <li key={toDoKey}>
            {toDoItem.name} ({toDoItem.id})
            <button onClick={() => handleToDoDelete(toDoItem.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
