import { FC } from "react";
import Footer from "@/components/Footer";
import OfficerCard from "@/components/OfficerCard";

const Team: FC = () => {
  const officers = [
    {
      name: "Eliana Du",
      role: "Director",
      bio: `Eliana '28 is a junior in the Computer Science Department and a prospective Creative Writing minor. She loves <a href="https://curius.app/eliana-du" target="_blank" rel="noopener noreferrer" class="text-[#F66813] hover:underline">reading</a>, <a href="https://elianadu.substack.com/" target="_blank" rel="noopener noreferrer" class="text-[#F66813] hover:underline">writing</a>, three-item lists, and subverting expectations.`,
      imageUrl: "/officers/eliana.jpeg",
      linkedin: "https://www.linkedin.com/in/elianadu/",
      email: "elianadu@princeton.edu",
      calLink: "https://app.cal.com/elianadu/30min",
    },
    {
      name: "Eric Chen",
      role: "Deputy Director",
      bio: `Eric '29 is a sophomore in the Computer Science Department and a prospective Linguistics and Education minor. He's a passionate polyglot and possibly the most enthusiastic person you've met.`,
      imageUrl: "/officers/eric.png",
      linkedin: "https://www.linkedin.com/in/eric--c/",
      email: "ec4155@princeton.edu",
    },
    {
      name: "John Emmett Souder",
      role: "Fellowship Lead",
      bio: "Emmett '27 is a senior in the ORFE department minoring in Energy. He's super excited to be here!",
      imageUrl: "/officers/emmett.jpeg",
      linkedin: "https://www.linkedin.com/in/john-emmett-souder/",
      email: "js0735@princeton.edu",
    },
    {
      name: "Jack Thompson",
      role: "Fellowship Lead",
      bio: `Jack '27 is a senior in the Computer Science Department minoring in Cognitive Science and Philosophy.`,
      imageUrl: "/officers/jack.jpg",
      linkedin: "https://www.linkedin.com/in/jacktlab/",
      email: "jackthompson@princeton.edu",
    },
    {
      name: "Vedant Badoni",
      role: "Cluster Admin",
      bio: "Vedant '28 is a junior in the Computer Science Department.",
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
            <div className="flex flex-wrap justify-center gap-8">
              {officers.map((officer) => (
                <div
                  key={officer.name}
                  className="w-full sm:w-[calc((100%-32px)/2)] lg:w-[calc((100%-64px)/3)]"
                >
                  <OfficerCard {...officer} />
                </div>
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
