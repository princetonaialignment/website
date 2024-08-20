import { FC, ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
};

const Paragraph: FC<ParagraphProps> = ({ children }) => (
  <p className="text-xl mb-6 leading-relaxed">{children}</p>
);

export default Paragraph;
