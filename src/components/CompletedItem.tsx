import React from "react";

interface ICompletedItemProps {
  item: {
    id: number;
    name: string;
    completed: boolean;
  };
  handleCompleteDelete: (id: number) => void;
}

export default function CompletedItem({
  item,
  handleCompleteDelete,
}: ICompletedItemProps) {
  return (
    <div className="completedItem">
      <div>
        <li key={item.id}>{item.name}</li>
      </div>
      <div>
        <button onClick={() => handleCompleteDelete(item.id)}>Delete</button>
      </div>
    </div>
  );
}
