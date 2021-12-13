import { VFC } from "react";
import { TitleLabel } from "@/libs/components";
import { useTodoForm } from "./hooks";
import { ErrorMessage } from "@hookform/error-message";

export const TodoInputForm: VFC = () => {
  const { register, handleSubmitTodo, errors } = useTodoForm();

  return (
    <>
      <TitleLabel text="TODO入力" />
      <form onSubmit={handleSubmitTodo}>
        <textarea {...register("content", { required: "This is required." })} />
        <input type="submit" value="追加" />
        <ErrorMessage errors={errors} name="content" />
      </form>
    </>
  );
};
