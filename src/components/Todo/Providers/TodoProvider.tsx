import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  VFC,
} from "react";
import { Todo } from "@/types/todo";
const TODO_DATA_URL = "http://localhost:3100/todos";

type Props = {
  children: ReactNode;
};

export const Context = createContext<Todo[]>([]);

export const TodoProvider: VFC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get<Todo[]>(TODO_DATA_URL);
      setTodos(res.data);
    };
    fetchData();
  }, []);

  return <Context.Provider value={todos}>{children}</Context.Provider>;
};

export const useTodos = () => {
  return { todos: useContext(Context) };
};
