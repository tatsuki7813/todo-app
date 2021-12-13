import { useTodos } from "@/components/Todo/Providers";
import { deleteTodo } from "@/api/todo";
import { Todo } from "@/types/todo";
import { useCallback } from "react";

export const useDeleteTodo = () => {
  const { todos, setTodos } = useTodos();
  const handleDeleteTodo = useCallback(
    (id: Todo["id"]) => {
      deleteTodo(id).then((deletedTodoId) => {
        const newTodos = todos.filter(({ id }) => id !== deletedTodoId);
        setTodos(newTodos);
      });
    },
    [setTodos, todos]
  );

  return { handleDeleteTodo };
};
