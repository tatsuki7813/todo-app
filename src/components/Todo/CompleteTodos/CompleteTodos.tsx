import { VFC } from "react";
import { TitleLabel } from "@/libs";
import { useCompleteTodos } from "./hooks";

export const CompleteTodos: VFC = () => {
  const { completeTodos } = useCompleteTodos();

  return (
    <>
      <TitleLabel text="完了のTODO" />
      <ul>
        {completeTodos.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
    </>
  );
};
