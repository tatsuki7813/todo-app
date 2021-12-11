import { useTodos } from "../Providers";

export const useCompleteTodos = () => {
  const { todos } = useTodos();
  const completeTodos = todos.filter(({ done }) => done);

  return { completeTodos };
};
