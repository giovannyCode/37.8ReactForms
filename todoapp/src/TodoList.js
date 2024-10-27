import React, { useState } from "react";
import Todo from "./Todo.js";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm.js";

function TodoList() {
  const arraytodos = [
    { id: 1, task: "Learn React basics" },
    { id: 2, task: "Go grocery shopping" },
    { id: 3, task: "Work out at the gym" },
    { id: 4, task: "Read a new book" },
    { id: 5, task: "Prepare a report for work" },
    { id: 6, task: "Plan a weekend trip" },
    { id: 7, task: "Cook a new recipe" },
  ];
  const [todos, setTodos] = useState(arraytodos);

  /** Add new item object to array. */
  const addTodo = (todo) => {
    let newTodo = { ...todo, id: uuid() };
    setTodos((todos) => [...todos, newTodo]);
  };
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <div>
      {<NewTodoForm addTodo={addTodo} />}
      <br></br>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          task={todo.task}
          onRemove={deleteTodo}
          id={todo.id}
        />
      ))}
    </div>
  );
}

export default TodoList;
