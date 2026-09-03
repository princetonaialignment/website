"use client";

import { FC } from "react";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Paragraph from "@/components/Paragraph";

const Alumni: FC = () => {
  const LogoWithHover: FC<{
    src: string;
    alt: string;
    href: string;
    maxWidthClassName?: string;
  }> = ({ src, alt, href, maxWidthClassName = "max-w-[150px]" }) => {
    const [style, animate] = useSpring(() => ({
      transform: "translateY(0px)",
      config: { tension: 200, friction: 15, duration: 200 },
    }));

    const handleMouseEnter = () => animate({ transform: "translateY(-10px)" });
    const handleMouseLeave = () => animate({ transform: "translateY(0px)" });

    return (
      <Link
        href={href}
        passHref
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 sm:w-1/3 md:w-1/4"
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
              className={`h-auto w-full ${maxWidthClassName}`}
            />
          </animated.div>
        </div>
      </Link>
    );
  };

  const logos = [
    { src: "/logos/openai.png", alt: "OpenAI", href: "https://openai.com" },
    { src: "/logos/anthropic.png", alt: "Anthropic", href: "https://www.anthropic.com" },
    {
      src: "/logos/eleutherai.webp",
      alt: "EleutherAI",
      href: "https://www.eleuther.ai/",
      maxWidthClassName: "max-w-[100px]",
    },
    { src: "/logos/dedalus.svg", alt: "Dedalus Labs", href: "https://www.dedaluslabs.ai/" },
    { src: "/logos/schwarzman.webp", alt: "Schwarzman Scholars", href: "https://www.schwarzmanscholars.org/" },
    { src: "/logos/ifp.jpg", alt: "Institute for Progress", href: "https://ifp.org/" },
    { src: "/logos/spar.avif", alt: "Supervised Program for Alignment Research", href: "https://sparai.org/" },
    { src: "/logos/cais.webp", alt: "Center for AI Safety", href: "https://safe.ai/" },
    { src: "/logos/mats.webp", alt: "ML Alignment & Theory Scholars", href: "https://www.matsprogram.org/" },
    { src: "/logos/sentient-futures.png", alt: "Sentient Futures", href: "https://www.sentientfutures.ai/" },
    { src: "/logos/constellation.svg", alt: "Constellation", href: "https://constellation.org/" },
    { src: "/logos/kairos.avif", alt: "Kairos", href: "https://kairos-project.org/" },
    { src: "/logos/arena.webp", alt: "ARENA", href: "https://www.arena.education/" },
    { src: "/logos/xlab.avif", alt: "UChicago XLab", href: "https://xrisk.uchicago.edu/" },
  ];

  return (
    <section id="alumni" className="py-28 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SectionTitle className="text-[#F66813] text-4xl font-bold mb-6">
            Organizations our members have worked with
          </SectionTitle>
          <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is a list of some of the organizations our members have
            worked with. Not all organisations listed endorse or are
            affiliated with PAIA.
          </Paragraph>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-12 max-w-4xl mx-auto">
          {logos.map((logo, index) => (
            <LogoWithHover key={index} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alumni;
