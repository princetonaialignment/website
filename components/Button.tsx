import { FC, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ href, children }) => (
  <Link
    href={href}
    className="inline-flex items-center bg-[#c2410c] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b73a0a] transition duration-300"
  >
    {children}
    <ArrowRight className="ml-2 h-5 w-5" />
  </Link>
);

export default Button;
