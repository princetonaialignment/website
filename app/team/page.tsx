import { FC } from "react";
import SectionTitle from "@/components/SectionTitle";
import Paragraph from "@/components/Paragraph";
import Footer from "@/components/Footer";
import OfficerCard from "@/components/OfficerCard";

const Team: FC = () => {
  const officers = [
    {
      name: "Owen Yang",
      role: "President, Advanced Technical Fellowship Lead",
      bio: "Owen '26 is a senior in the Mathematics Department.",
      imageUrl: "/officers/owen.jpeg",
      linkedin: "https://www.linkedin.com/in/tigershark22/",
      email: "oy3975@princeton.edu",
    },
    {
      name: "Kaleb So",
      role: "Treasurer",
      bio: "Kaleb '29 is a first-year in the Mathematics Department.",
      imageUrl: "/officers/kaleb.jpeg",
      linkedin: "https://www.linkedin.com/in/kaleb-so/",
      email: "kaleb.so@princeton.edu",
    },
    {
      name: "Eric Chen",
      role: "Operations",
      bio: `Eric '29 is a first-year in the Computer Science Department and a prospective Linguistics and Education minor.`,
      imageUrl: "/officers/eric.png",
      linkedin: "https://www.linkedin.com/in/eric--c/",
      email: "ec4155@princeton.edu",
    },
    {
      name: "Jack Thompson",
      role: "Governance Fellowship Lead",
      bio: `Jack '27 is a junior in the Computer Science Department.`,
      imageUrl: "/officers/jack.jpg",
      linkedin: "",
      email: "jackthompson@princeton.edu",
    },
    {
      name: "Eliana Du",
      role: "Intro Technical Fellowship Facilitator",
      bio: `Eliana '28 is a sophomore in the Computer Science Department and a prospective Creative Writing minor.`,
      imageUrl: "/officers/eliana.jpeg",
      linkedin: "https://www.linkedin.com/in/elianadu/",
      email: "elianadu@princeton.edu",
    },
    {
      name: "Elle Lazarski",
      role: "General Club Meeting Lead",
      bio: `Elle '26 is a senior in the Electrical & Computer Engineering Department.`,
      imageUrl: "/officers/elle.png",
      linkedin: "https://www.linkedin.com/in/elle-lazarski/",
      email: "elle.lazarski@princeton.edu",
    },
    {
      name: "Maggie Wang",
      role: "Intro/Advanced Technical Fellowship Facilitator",
      bio: `Maggie '26 is a senior in the Computer Science Department.`,
      imageUrl: "/officers/maggie.jpg",
      linkedin: "https://www.linkedin.com/in/maggiewang0785/",
      email: "mw0785@princeton.edu",
    },
    {
      name: "Vedant Badoni",
      role: "Tech Lead",
      bio: "Vedant '28 is a sophomore in the Computer Science Department.",
      imageUrl: "/officers/vedant.jpg",
      linkedin: "https://www.linkedin.com/in/vedant-badoni-b5a67a20b/",
      email: "vedant.badoni@princeton.edu",
    },
  ];

  return (
    <div className="bg-[#F66813] text-gray-800">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r bg-[#F66813] text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Our Team
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              The dedicated team behind PAIA.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-28 px-6 bg-gray-100">
          <div className="container mx-auto max-w-6xl">
            <SectionTitle>Meet Our Team</SectionTitle>
            <div className="mb-12 text-center">
              <Paragraph>
                We aim to foster a vibrant community for students and
                researchers committed to addressing the critical issues
                surrounding AI safety and alignment.
              </Paragraph>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {officers.map((officer) => (
                <OfficerCard key={officer.name} {...officer} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
