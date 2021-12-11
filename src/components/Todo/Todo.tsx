import { VFC } from "react";
import { TitleLabel } from "../../libs";

export const Todo: VFC = () => {
  return (
    <>
      <TitleLabel text="TODO管理" tag="h1" />
      <TitleLabel text="TODO入力" />
      <TitleLabel text="未完了のTODO" />
      <TitleLabel text="完了のTODO" />
    </>
  );
};
