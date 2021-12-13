import { useTodos } from "@/components/Todo/Providers";
import { Todo } from "@/types/todo";
import { updateTodo } from "@/api/todo";
import { useCallback } from "react";

export const useChangeTodoStatus = () => {
  const { todos, setTodos } = useTodos();
  const handleChangeTodoStatus = useCallback(
    (id: Todo["id"]) => {
      const [targetTodo] = todos.filter((todo) => todo.id === id);
      const newTodo = { ...targetTodo, done: !targetTodo.done };

      updateTodo(newTodo).then((updatedTodo) => {
        const newTodos = todos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        );
        setTodos(newTodos);
      });
    },
    [setTodos, todos]
  );

  return { handleChangeTodoStatus };
};
