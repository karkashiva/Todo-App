import React from "react";
import { Ilist } from "../App";
import TodoItem from "./TodoItem";

interface ITodoListProps {
  list: {
    id: number;
    name: string;
    completed: boolean;
  }[];
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
  handleComplete: (id: number) => void;
}

export default function TodoList({
  list,
  handleDelete,
  handleEdit,
  handleComplete,
}: ITodoListProps) {
  return (
    <div>
      <ul>
        {list.map((item: Ilist) => (
          <TodoItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleComplete={handleComplete}
          />
        ))}
      </ul>
    </div>
  );
}
