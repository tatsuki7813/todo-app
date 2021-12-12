import axios from "axios";
import { Todo } from "@/types/todo";

const TODO_DATA_URL = "http://localhost:3100/todos";

export const getAllTodos = async () => {
  const res = await axios.get<Todo[]>(TODO_DATA_URL);

  return res.data;
};

export const addTodo = async (newTodo: Todo) => {
  const res = await axios.post<Todo>(TODO_DATA_URL, newTodo);

  return res.data;
};

export const deleteTodo = async (todoId: Todo["id"]) => {
  await axios.delete<Todo>(`${TODO_DATA_URL}/${todoId}`);

  return todoId;
};

export const updateTodo = async (todo: Todo) => {
  const res = await axios.put<Todo>(`${TODO_DATA_URL}/${todo.id}`, todo);

  return res.data;
};
