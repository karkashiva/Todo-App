import React from "react";
import { Ilist } from "../App";

interface ITodoItemProps {
  item: Ilist;
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
  handleComplete: (id: number) => void;
}
export default function TodoItem({
  item,
  handleDelete,
  handleEdit,
  handleComplete,
}: ITodoItemProps) {
  return (
    <div className="todoItem">
      <div>
        <p>{item.name}</p>
      </div>
      <div className="buttons">
        <button onClick={() => handleComplete(item.id)}>Complete</button>
        <button onClick={() => handleEdit(item.id)}>Edit</button>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </div>
    </div>
  );
}
