import { VFC } from "react";
import {
  TitleLabel,
  DeleteButton,
  ChangeStatusButton,
} from "@/libs/components";
import { useCompleteTodos } from "./hooks";

export const CompleteTodos: VFC = () => {
  const { completeTodos } = useCompleteTodos();

  return (
    <>
      <TitleLabel text="完了のTODO" />
      <ul>
        {completeTodos.map(({ id, content, done }) => (
          <li key={id}>
            {content}
            <DeleteButton id={id} />
            <ChangeStatusButton id={id} label={done ? "未完了へ" : "完了へ"} />
          </li>
        ))}
      </ul>
    </>
  );
};
