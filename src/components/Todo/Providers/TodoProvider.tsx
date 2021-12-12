import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
  VFC,
} from "react";
import { Todo } from "@/types/todo";
import { getAllTodos } from "@/api/todo";

type ContextValue = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

export const Context = createContext<ContextValue>({} as ContextValue);

type Props = {
  children: ReactNode;
};

export const TodoProvider: VFC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    getAllTodos().then((todos) => setTodos(todos));
  }, []);

  return (
    <Context.Provider value={{ todos, setTodos }}>{children}</Context.Provider>
  );
};

export const useTodos = () => {
  return useContext(Context);
};
