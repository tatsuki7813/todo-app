import { Todo } from "@/types/todo";
import { useForm } from "react-hook-form";
import { ulid } from "ulid";
import { useTodos } from "../Providers";
import { addTodo } from "@/api/todo";

export const useTodoForm = () => {
  const { register, handleSubmit, reset } = useForm<Todo>();
  const { todos, setTodos } = useTodos();

  const handleSubmitTodo = handleSubmit((data: Pick<Todo, "content">) => {
    const newTodo: Todo = { ...data, id: ulid(), done: false };
    addTodo(newTodo).then((addedTodo) => {
      setTodos([addedTodo, ...todos]);
      reset();
    });
  });

  return { register, handleSubmitTodo };
};
