import { VFC } from "react";
import { TitleLabel } from "@/libs";
import { useIncompleteTodos } from "./hooks";

export const IncompleteTodos: VFC = () => {
  const { incompleteTodos } = useIncompleteTodos();

  return (
    <>
      <TitleLabel text="未完了のTODO" />
      <ul>
        {incompleteTodos.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
    </>
  );
};
