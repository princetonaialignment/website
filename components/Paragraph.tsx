import { FC, ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

const Paragraph: FC<ParagraphProps> = ({ children, className = "" }) => (
  <p className={`text-xl mb-6 leading-relaxed ${className}`}>{children}</p>
);

export default Paragraph;
