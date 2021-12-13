import { VFC } from "react";
import { useChangeTodoStatus } from "@/libs/hooks";
import { Todo } from "@/types/todo";

type Props = {
  id: Todo["id"];
  label: string;
};

export const ChangeStatusButton: VFC<Props> = ({ id, label }) => {
  const { handleChangeTodoStatus } = useChangeTodoStatus();

  return <button onClick={() => handleChangeTodoStatus(id)}>{label}</button>;
};
