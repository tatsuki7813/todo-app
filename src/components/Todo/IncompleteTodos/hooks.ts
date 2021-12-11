import { useTodos } from "../Providers";

export const useIncompleteTodos = () => {
  const { todos } = useTodos();
  const incompleteTodos = todos.filter(({ done }) => !done);

  return { incompleteTodos };
};
