import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import CompletedList from "./components/CompletedList";

export interface Ilist {
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

  const handleDelete = useCallback(
    (id: number) => {
      const newList = list.filter((item) => item.id !== id);
      setList(newList);
    },
    [list]
  );

  const handleEdit = useCallback(
    (id: number) => {
      const newList = list.filter((item) => item.id !== id);
      const selectedTodo = list.find((item) => item.id === id);
      setList(newList);
      if (!selectedTodo) return;
      setTodoName(selectedTodo.name);
      setEditing(true);
      setEditId(id);
    },
    [list]
  );

  const handleComplete = useCallback(
    (id: number) => {
      const newList = list.filter((item) => item.id !== id);
      const selectedTodo = list.find((item) => item.id === id);
      if (!selectedTodo) return;
      const newTodo = { id: id, name: selectedTodo.name, completed: true };
      setList(newList);
      setCompletedList([...completedList, newTodo]);
    },
    [list, completedList]
  );

  const handleCompleteDelete = useCallback(
    (id: number) => {
      const newList = completedList.filter((item) => item.id !== id);
      setCompletedList(newList);
    },
    [completedList]
  );

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    localStorage.setItem("completedList", JSON.stringify(completedList));
  }, [completedList]);

  return (
    <div className="App">
      <h1>
        Todo App
        <InputForm
          todoName={todoName}
          editing={editing}
          handleSubmit={handleSubmit}
        />
        <TodoList
          list={list}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          handleEdit={handleEdit}
        />
        <CompletedList
          completedList={completedList}
          handleCompleteDelete={handleCompleteDelete}
        />
      </h1>
    </div>
  );
}

export default App;
