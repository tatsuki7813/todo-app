import { VFC, ElementType } from "react";

type Props = {
  text: string;
  tag?: ElementType;
};

export const TitleLabel: VFC<Props> = ({ text, tag: Tag = "h2" }) => {
  return <Tag>{text}</Tag>;
};
