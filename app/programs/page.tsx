"use client";

import { FC } from "react";
import { BookOpen, Check, GraduationCap, Mountain } from "lucide-react";
import Footer from "@/components/Footer";
import { ApplyButton } from "@/components/Button";

const Programs: FC = () => {
  const featuredProgram = {
    title: "AI Safety Fundamentals",
    description: `The main way people get involved with Princeton AI Alignment—an 8-week reading group on why AI safety matters and what's being done about it. Covers AI's trajectory, misalignment, technical safety, policy, and careers in the field. Open to anyone, with preference for Princeton undergrad and grad students.`,
    icon: <BookOpen size={40} className="text-white" />,
    checklist: [
      "8 weeks, ~2hr/wk",
      "Free food at every session",
      "No prior AI/ML background required",
      "No reading required outside of meetings",
    ],
    applyLink: "https://airtable.com/appurItpElOdUOB2m/pagqdb4wWUWJrTv2N/form",
    applyText: "Apply by Sept. 11",
    curriculumLink:
      "https://docs.google.com/document/d/1fgTlUj5Kc6aAkV4OVSU8KI3cKUGgPrq70miTOl-s5EU/edit?usp=sharing",
  };

  const linkClass = "text-[#F66813] hover:underline";

  const programs = [
    {
      title: "Technical Reading Group",
      description: `Each week, we select a technical paper from the AI alignment literature or related research and meet to individually read and then discuss them. Prior participation in our Fundamentals Fellowship is highly recommended for those without AI safety context. More information coming about the Technical Reading Group soon -- <a href="https://airtable.com/appurItpElOdUOB2m/pagDUkWLMIpZxdwFL/form" target="_blank" rel="noopener noreferrer" class="${linkClass}">sign up on our mailing list</a> to stay notified.`,
      icon: <BookOpen size={28} className="text-[#F66813]" />,
    },
    {
      title: "Retreats and Conferences",
      description: `We send our members to AI safety retreats across the country, including <a href="https://www.globalchallengesproject.org/" target="_blank" rel="noopener noreferrer" class="${linkClass}">GCP workshops</a>, <a href="https://aisst.ai/workshops" target="_blank" rel="noopener noreferrer" class="${linkClass}">AISST/MAIA retreats</a>, and retreats for university group organizers. We also support our members in attending AI safety-related conferences, such as <a href="https://controlconf.org/" target="_blank" rel="noopener noreferrer" class="${linkClass}">Control Conf</a>, <a href="https://dcminiconf.com/" target="_blank" rel="noopener noreferrer" class="${linkClass}">AI Governance DCMC</a>, and <a href="https://www.effectivealtruism.org/ea-global" target="_blank" rel="noopener noreferrer" class="${linkClass}">EA Globals</a>.`,
      icon: <Mountain size={28} className="text-[#F66813]" />,
    },
    {
      title: "Learning and Career Support",
      description: `We want to accelerate your engagement with AI safety! If you’re excited to learn more beyond the pace of the fellowship, we’re here to guide you. We’ll keep you informed about internship opportunities like <a href="https://www.matsprogram.org/" target="_blank" rel="noopener noreferrer" class="${linkClass}">MATS Research</a>, <a href="https://horizonpublicservice.org/programs/become-a-fellow/" target="_blank" rel="noopener noreferrer" class="${linkClass}">Horizon Policy Fellows</a>, or the <a href="https://generatorresidency.org/" target="_blank" rel="noopener noreferrer" class="${linkClass}">Generator Residency</a>. Please don’t hesitate to reach out to us to talk about how we can support your personal growth and your career in the field.`,
      icon: <GraduationCap size={28} className="text-[#F66813]" />,
    },
  ];

  return (
    <div className="bg-[#F66813] text-gray-800">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r bg-[#F66813] text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              We provide ways to engage with AI alignment for all levels of
              experience through fellowships, socials, and speaker events.
              Plus, we provide free food at every event!
            </p>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto max-w-6xl">
            {/* Featured Program */}
            <div className="bg-[#F66813] rounded-xl shadow-lg p-8 md:p-10 mb-10">
              <div className="flex items-center mb-4">
                {featuredProgram.icon}
                <h3 className="ml-3 text-2xl md:text-3xl font-bold text-white">
                  {featuredProgram.title}
                </h3>
              </div>
              <p className="text-white/90 mb-6 max-w-4xl">
                {featuredProgram.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-8">
                {featuredProgram.checklist.map((item, index) => (
                  <div key={index} className="flex items-center text-white">
                    <Check size={18} className="mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <ApplyButton
                  href={featuredProgram.applyLink}
                  external
                  className="!bg-white !text-[#F66813] hover:!bg-gray-100"
                >
                  {featuredProgram.applyText}
                </ApplyButton>
                <ApplyButton
                  href={featuredProgram.curriculumLink}
                  external
                  className="!bg-transparent border-2 border-white !text-white hover:!bg-white/10"
                >
                  See the curriculum
                </ApplyButton>
              </div>
            </div>

            {/* Other Programs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col h-full"
                >
                  <div className="flex items-center mb-3">
                    {program.icon}
                    <h3 className="ml-2 text-base font-bold text-gray-800">
                      {program.title}
                    </h3>
                  </div>
                  <div
                    className="text-sm text-gray-600"
                    dangerouslySetInnerHTML={{ __html: program.description }}
                  ></div>
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

export default Programs;
