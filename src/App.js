import { useState } from "react";
import TodoEntryForm from "./TodoEntryForm";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Meet Masao for Udon" },
    { id: 2, content: "Fix up these horrible React notes" },
    { id: 3, content: "Finish grading!!!!" },
    { id: 4, content: "Pet the Dogs" },
  ]);
  function addTodo(todo) {
    setTodos([...todos, todo]);
  }
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <div className="App">
      <h1>Things To Do</h1>
      <TodoList todos={todos} deleter={deleteTodo} />
      <TodoEntryForm adder={addTodo} />
    </div>
  );
}
