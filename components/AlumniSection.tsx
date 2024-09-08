"use client";

import { FC } from "react";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Paragraph from "@/components/Paragraph";

const Alumni: FC = () => {
  const LogoWithHover: FC<{ src: string; alt: string; href: string }> = ({
    src,
    alt,
    href,
  }) => {
    const [style, animate] = useSpring(() => ({
      transform: "translateY(0px)",
      config: { tension: 200, friction: 15, duration: 200 }, // Adjusted for stability
    }));

    const handleMouseEnter = () => {
      animate({ transform: "translateY(-10px)" });
    };

    const handleMouseLeave = () => {
      animate({ transform: "translateY(0px)" });
    };

    return (
      <Link
        href={href}
        passHref
        className="flex-1 min-w-[200px] max-w-[250px]"
        >
        <div className="p-4 flex items-center justify-center h-full">
          <animated.div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={style}
            className="flex items-center justify-center"
          >
            <Image
              src={src}
              alt={alt}
              width={150}
              height={50}
              className="h-auto max-w-full"
            />
          </animated.div>
        </div>
      </Link>
    );
  };

  const logos = [
    { src: "/logos/openai.png", alt: "OpenAI", href: "https://openai.com" },
    {
      src: "/logos/anthropic.png",
      alt: "Anthropic",
      href: "https://www.anthropic.com",
    },
  ];

  return (
    <section id="alumni" className="py-28 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SectionTitle className="text-[#F66813] text-4xl font-bold mb-6">
            The PAIA Network
          </SectionTitle>
          <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our members have gone on to work for leading organizations in AI
            safety and research.
          </Paragraph>
        </div>

        <div className="flex flex-wrap justify-center items-stretch gap-8 mt-12">
          {logos.map((logo, index) => (
            <LogoWithHover
              key={index}
              src={logo.src}
              alt={logo.alt}
              href={logo.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alumni;
