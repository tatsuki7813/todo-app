import { VFC } from "react";
import { TitleLabel } from "@/libs/components";
import { useTodoForm } from "./hooks";

export const TodoInputForm: VFC = () => {
  const { register, handleSubmitTodo } = useTodoForm();

  return (
    <>
      <TitleLabel text="TODO入力" />
      <form onSubmit={handleSubmitTodo}>
        <textarea {...register("content")} />
        <input type="submit" value="追加" />
      </form>
    </>
  );
};
