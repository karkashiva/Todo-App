import React from "react";
import { Ilist } from "../App";
import CompletedItem from "./CompletedItem";

interface ICompletedListProps {
  completedList: Ilist[];
  handleCompleteDelete: (id: number) => void;
}

export default function CompletedList({
  completedList,
  handleCompleteDelete,
}: ICompletedListProps) {
  return (
    <div>
      <h5>Completed List:</h5>
      <ul>
        {completedList.map((item, index) => (
          <CompletedItem
            key={index}
            item={item}
            handleCompleteDelete={handleCompleteDelete}
          />
        ))}
      </ul>
    </div>
  );
}
