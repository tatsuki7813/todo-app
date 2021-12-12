import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  VFC,
} from "react";
import { Todo } from "@/types/todo";
import { getAllTodos } from "@/api/todo";

type Props = {
  children: ReactNode;
};

export const Context = createContext<Todo[]>([]);

export const TodoProvider: VFC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    getAllTodos().then((todos) => setTodos(todos));
  }, []);

  return <Context.Provider value={todos}>{children}</Context.Provider>;
};

export const useTodos = () => {
  return { todos: useContext(Context) };
};
