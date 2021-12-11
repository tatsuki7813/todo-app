import { VFC } from "react";
import { TitleLabel } from "@/libs";
import { CompleteTodos } from "./CompleteTodos";
import { IncompleteTodos } from "./IncompleteTodos";
import { TodoInputForm } from "./TodoInputForm";

export const Todo: VFC = () => {
  return (
    <>
      <TitleLabel text="TODO管理" tag="h1" />
      <TitleLabel text="TODO入力" />
      <TodoInputForm />
      <TitleLabel text="未完了のTODO" />
      <IncompleteTodos />
      <TitleLabel text="完了のTODO" />
      <CompleteTodos />
    </>
  );
};
