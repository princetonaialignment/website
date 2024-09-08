import { FC } from "react";
import SectionTitle from "@/components/SectionTitle";
import Paragraph from "@/components/Paragraph";
import Footer from "@/components/Footer";
import OfficerCard from "@/components/OfficerCard";

const About: FC = () => {
  const officers = [
    {
      name: "Windsor Nguyen",
      role: "Advanced Reading Group, Lead Organizer",
      bio: `Windsor '25 is a senior in the Computer Science Department.`,
      imageUrl: "/officers/windsor.jpeg",
      github: "https://github.com/windsornguyen",
      linkedin: "https://linkedin.com/in/windsornguyen",
      email: "windsor@princetonalignment.org",
    },
    {
      name: "Nick Ritter",
      role: "Co-Founder, Organizer",
      bio: "Nick '22 GS'28 is a third-year PhD student in the Economics Department.",
      imageUrl: "/officers/nick.jpeg",
      linkedin: "https://www.linkedin.com/in/nicholas-ritter-888777142/",
      email: "nick@princetonalignment.org",
    },
    {
      name: "Saurish Srivastava",
      role: "Infrastructure, Organizer",
      bio: "Saurish '27 is a sophomore in the Computer Science Department.",
      imageUrl: "/officers/saurish.jpeg",
      linkedin: "https://www.linkedin.com/in/saurishhh/",
      github: "https://github.com/minor",
      email: "saurish@princetonalignment.org",
    },
    {
      name: "Owen Yang",
      role: "Treasurer, Organizer",
      bio: "Owen '26 is a junior in the Mathematics Department.",
      imageUrl: "/officers/owen.jpeg",
      linkedin: "https://www.linkedin.com/in/tigershark22/",
      github: "https://github.com/tigeyshark22",
      email: "owen@princetonalignment.org",
    },
    {
      name: "James Zhang",
      role: "Intro Seminar Facilitator, Organizer",
      bio: "James '25 is a senior in the Computer Science Department.",
      imageUrl: "/officers/james.png",
      github: "https://github.com/jzhang512",
      linkedin: "https://www.linkedin.com/in/jzhang512/",
      email: "james@princetonalignment.org",
    },
  ];

  return (
    <div className="bg-[#F66813] text-gray-800">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r bg-[#F66813] text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">About Us</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              The dedicated team behind PAIA.
            </p>
          </div>
        </section>

        {/* Team Section with Pentagon Layout */}
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
            <div className="relative">
              {/* Top row */}
              <div className="flex justify-between mb-16">
                {officers.slice(0, 3).map((officer) => (
                  <div key={officer.name} className="w-1/3 mx-2">
                    <OfficerCard {...officer} />
                  </div>
                ))}
              </div>

              {/* Bottom row */}
              <div className="flex justify-center">
                {officers.slice(3, 5).map((officer) => (
                  <div
                    key={officer.name}
                    className="w-1/3 mx-2 transform -translate-y-8"
                  >
                    <OfficerCard {...officer} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Reminder Section */}
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <SectionTitle>Join Our Mission</SectionTitle>
            <div className="mb-8">
              <Paragraph>
                We&apos;re always looking for passionate individuals to join our
                cause. Whether you&apos;re a student, researcher, or community
                member, there are many ways to get involved and contribute to
                the important work of AI alignment. If you are interested in 
                helping to organize future iterations of PAIA, or you just want to 
                schedule a coffee chat, please contact us below.
              </Paragraph>
            </div>
            <a
              href="https://airtable.com/appsSKn5Zey1xrPDZ/pag6pa9t9HNSi9q5D/form"
              className="bg-[#F66813] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E55703] transition duration-300"
            >
              Get Involved
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
