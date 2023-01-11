import React, { useEffect, useState } from "react";

interface IInputFormProps {
  todoName: string;
  handleSubmit: (todo: string) => void;
  editing: boolean;
}

export default function InputForm({
  todoName,
  handleSubmit,
  editing,
}: IInputFormProps) {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    if (editing) {
      setTodo(todoName);
    }
  }, [editing]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(todo);
        setTodo("");
      }}
    >
      <input
        type="text"
        value={todo || ""}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">{editing ? "Edit" : "Add"}</button>
    </form>
  );
}
