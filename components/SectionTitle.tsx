import { FC, ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ children, className }) => (
  <h2
    className={`text-4xl font-bold mb-8 text-center text-[#F66813] ${
      className ?? ""
    }`}
  >
    {children}
  </h2>
);

export default SectionTitle;
