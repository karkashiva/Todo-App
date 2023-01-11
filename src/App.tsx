import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import CompletedList from "./components/CompletedList";

interface Ilist {
  id: number;
  name: string;
  completed: boolean;
}

function App() {
  const [todoName, setTodoName] = useState<string>("");
  const [list, setList] = useState<Ilist[]>([]);
  const [completedList, setCompletedList] = useState<Ilist[]>([]);
  const [editing, setEditing] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);

  return (
    <div className="App">
      <h1>
        Todo App
        <InputForm />
        <TodoList />
        <CompletedList />
      </h1>
    </div>
  );
}

export default App;
