import { FC } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CardProps = {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
  linkText: string;
  href: string;
};

const Card: FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  linkText,
  href,
}) => (
  <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
    <Icon className="h-12 w-12 text-[#ea580c] mb-4" />
    <h4 className="text-xl font-semibold mb-3">{title}</h4>
    <p className="mb-4">{description}</p>
    <Link
      href={href}
      className="text-[#ea580c] font-semibold hover:underline inline-flex items-center"
    >
      {linkText} <ArrowRight className="ml-1 h-4 w-4" />
    </Link>
  </article>
);

export default Card;
