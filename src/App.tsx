import React, { useCallback, useState } from "react";
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
  const [editId, setEditId] = useState<number>(-1);

  const handleSubmit = useCallback(
    (todoName: string) => {
      if (!todoName) {
        alert("Enter a todo name");
        return;
      }
      if (todoName && editing) {
        const newList = list.filter((item) => item.id !== editId);
        const newTodo = { id: editId, name: todoName, completed: false };
        setList([...newList, newTodo]);
        setEditing(false);
        setEditId(-1);
      } else {
        const newTodo = {
          id: list.length + 1,
          name: todoName,
          completed: false,
        };
        setList([...list, newTodo]);
      }
      setTodoName("");
    },
    [todoName, list, editing, editId]
  );

  return (
    <div className="App">
      <h1>
        Todo App
        <InputForm
          todoName={todoName}
          editing={editing}
          handleSubmit={handleSubmit}
        />
        <TodoList />
        <CompletedList />
      </h1>
    </div>
  );
}

export default App;
