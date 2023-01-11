import { Ilist } from "../App";

export async function getTodos() {
  let promise = new Promise<Ilist[]>((resolve, reject) => {
    setTimeout(() => {
      let todos = localStorage.getItem("todos");
      if (todos) {
        let list: Ilist[] = JSON.parse(todos);
        resolve(list);
      } else {
        resolve([]);
      }
    }, 1000);
  });
  return promise;
}

export function getCompletedTodos() {
  let promise = new Promise<Ilist[]>((resolve, reject) => {
    setTimeout(() => {
      let completedTodos = localStorage.getItem("completedTodos");
      if (completedTodos) {
        resolve(JSON.parse(completedTodos));
      } else {
        resolve([]);
      }
    }, 1000);
  });
  return promise;
}
