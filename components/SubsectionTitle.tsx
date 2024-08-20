import { FC, ReactNode } from "react";

type SubsectionTitleProps = {
  children: ReactNode;
};

const SubsectionTitle: FC<SubsectionTitleProps> = ({ children }) => (
  <h3 className="text-2xl font-bold mt-12 mb-4 text-[#c2410c]">{children}</h3>
);

export default SubsectionTitle;
