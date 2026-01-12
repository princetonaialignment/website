import { FC } from "react";
import SectionTitle from "@/components/SectionTitle";
import Paragraph from "@/components/Paragraph";
import Footer from "@/components/Footer";
import OfficerCard from "@/components/OfficerCard";

const About: FC = () => {
  const officers = [
    {
      name: "Owen Yang",
      role: "President, Advanced Technical Reading Group Lead",
      bio: "Owen '26 is a senior in the Mathematics Department.",
      imageUrl: "/officers/owen.jpeg",
      linkedin: "https://www.linkedin.com/in/tigershark22/",
      email: "oy3975@princeton.edu",
    },
    {
      name: "Brandon Cho",
      role: "Treasurer",
      bio: "Brandon '26 is a senior in the Mathematics Department.",
      imageUrl: "/officers/brandon.png",
      linkedin: "https://www.linkedin.com/in/brandon-y-cho/",
      email: "brandon.cho@princeton.edu",
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
      name: "Kia Ghods",
      role: "Organizer, Intro/Advanced Reading Group Facilitator",
      bio: `Kia '27 is a junior in the Computer Science Department.`,
      imageUrl: "/officers/kia.png",
      linkedin: "https://linkedin.com/in/kia-ghods",
      email: "kia.ghods@princeton.edu",
    },
    {
      name: "Keith Matanachai",
      role: "Organizer, Intro Reading Group Facilitator",
      bio: `Keith '26 is a senior in the Computer Science Department.`,
      imageUrl: "/officers/keith.png",
      linkedin: "https://www.linkedin.com/in/keith-matanachai/",
      email: "km4074@princeton.edu",
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
      name: "Jishnu Roychoudhury",
      role: "Organizer, Intro/Advanced Reading Group Facilitator",
      bio: `Jishnu '27 is a junior in the Computer Science Department.`,
      imageUrl: "/officers/Jishnu.png",
      linkedin: "https://www.linkedin.com/in/jishnu-roychoudhury/",
      email: "jishnu.roy@princeton.edu",
    },
    {
      name: "Maggie Wang",
      role: "Organizer, Intro/Advanced Reading Group Facilitator",
      bio: `Maggie '26 is a senior in the Computer Science Department.`,
      imageUrl: "/officers/maggie.jpg",
      linkedin: "https://www.linkedin.com/in/maggiewang0785/",
      email: "mw0785@princeton.edu",
    },
  ];

  return (
    <div className="bg-[#F66813] text-gray-800">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r bg-[#F66813] text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              About Us
            </h1>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {officers.map((officer) => (
                <OfficerCard key={officer.name} {...officer} />
              ))}
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
                helping to organize future iterations of PAIA, or you just want
                to schedule a coffee chat, please contact us below.
              </Paragraph>
            </div>
            <a
              href="https://forms.gle/ocD73Ron7rUBTjCr6"
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
