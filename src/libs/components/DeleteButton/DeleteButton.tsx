import { VFC } from "react";
import { useDeleteTodo } from "@/libs/hooks";
import { Todo } from "@/types/todo";

type Props = {
  id: Todo["id"];
};

export const DeleteButton: VFC<Props> = ({ id }) => {
  const { handleDeleteTodo } = useDeleteTodo();

  return <button onClick={() => handleDeleteTodo(id)}>削除</button>;
};
