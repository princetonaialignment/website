import { FC, ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

const SectionTitle: FC<SectionTitleProps> = ({ children }) => (
  <h2 className="text-4xl font-bold mb-8 text-center text-[#ea580c]">
    {children}
  </h2>
);

export default SectionTitle;
