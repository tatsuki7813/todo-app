import { VFC } from "react";
import { TitleLabel } from "@/libs/components";
import { CompleteTodos } from "./CompleteTodos";
import { IncompleteTodos } from "./IncompleteTodos";
import { TodoInputForm } from "./TodoInputForm";
import { TodoProvider } from "./Providers";

export const Todo: VFC = () => {
  return (
    <TodoProvider>
      <TitleLabel text="TODO管理" tag="h1" />
      <TodoInputForm />
      <IncompleteTodos />
      <CompleteTodos />
    </TodoProvider>
  );
};
