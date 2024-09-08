import { FC, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  showArrow?: boolean;
  className?: string; // Add className prop
};

const ButtonBase: FC<ButtonProps> = ({
  href,
  children,
  showArrow = false,
  className = "", 
}) => (
  <Link
    href={href}
    className={`inline-flex items-center px-6 py-3 rounded-full font-semibold transition duration-300 ${className}`}
  >
    <>
      {children}
      {showArrow && <ArrowRight className="ml-2 h-5 w-5" />}
    </>
  </Link>
);

export const Button: FC<ButtonProps> = (props) => (
  <ButtonBase
    {...props}
    className={`bg-[#c2410c] text-white hover:bg-[#b73a0a] ${props.className}`}
  />
);

export const ApplyButton: FC<ButtonProps> = (props) => (
  <ButtonBase
    {...props}
    className={`bg-[#c2410c] text-white hover:bg-[#b73a0a] justify-center ${props.className}`}
  />
);
