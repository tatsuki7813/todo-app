import { VFC } from "react";
import {
  TitleLabel,
  DeleteButton,
  ChangeStatusButton,
} from "@/libs/components";
import { useIncompleteTodos } from "./hooks";

export const IncompleteTodos: VFC = () => {
  const { incompleteTodos } = useIncompleteTodos();

  return (
    <>
      <TitleLabel text="未完了のTODO" />
      <ul>
        {incompleteTodos.map(({ id, content, done }) => (
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
