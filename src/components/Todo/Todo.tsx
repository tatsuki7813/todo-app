import { VFC } from "react";
import { TitleLabel } from "@/libs";
import { CompleteTodos } from "./CompleteTodos";
import { IncompleteTodos } from "./IncompleteTodos";
import { TodoInputForm } from "./TodoInputForm";

export const Todo: VFC = () => {
  return (
    <>
      <TitleLabel text="TODO管理" tag="h1" />
      <TodoInputForm />
      <IncompleteTodos />
      <CompleteTodos />
    </>
  );
};
