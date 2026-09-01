"use client";

import { FC } from "react";
import { BookOpen, Calendar, Scale } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import Paragraph from "@/components/Paragraph";
import Footer from "@/components/Footer";
import { ApplyButton } from "@/components/Button";
import useApplicationStore from "@/app/stores/useApplicationStore";

const Programs: FC = () => {
  const applicationsOpen = useApplicationStore(
    (state) => state.applicationsOpen,
  );
  const programs = [
    {
      title: "Intro Technical Fellowship",
      description: `An overview of AI alignment, the field that aims to align advanced AI systems with human values and intentions. We cover the fundamentals such as interpreting the internals of neural networks, reinforcement learning from human feedback, and concrete ways that transformative AI might go really badly. Prior machine learning experience is not necessary! See our curriculum <a href="https://docs.google.com/document/d/1BDu8MiLbjQ-QBu-OsvQBQFVzCCnjVC8wnwmw3vklYfQ/pub" class="text-[#F66813] hover:underline">here</a>.`,
      prerequisites: "None",
      duration: "8 weeks, ~2hr/wk",
      icon: <BookOpen size={36} className="text-[#F66813]" />,
    },
    {
      title: "Advanced Technical Fellowship",
      description: `Each week, we select a technical paper from the AI alignment literature or related research and meet to individually read and then discuss them. We may also host talks from alignment researchers from time to time. Prior participation in our Intro Technical Fellowship is not necessary.`,
      prerequisites: "Prior ML knowledge helpful",
      duration: "8 weeks, ~1.5hr/wk",
      icon: <Calendar size={36} className="text-[#F66813]" />,
    },
    {
      title: "Policy and Governance Fellowship",
      description: `An exploration of the policy and governance landscape surrounding advanced AI. We read and discuss foundational and contemporary work on AI regulation, international coordination, and institutional design—examining how governments, research labs, and civil society can shape the development of AI to be safe and beneficial.`,
      prerequisites: "None",
      duration: "8 weeks, ~1.5hr/wk",
      icon: <Scale size={36} className="text-[#F66813]" />,
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
              Learn all about AI alignment.
            </p>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto max-w-6xl">
            <SectionTitle>Explore Our Offerings</SectionTitle>
            <Paragraph className="mb-12 text-center max-w-3xl mx-auto">
              We provide various ways to engage with AI alignment through
              structured seminars, fellowships, and workshops for all levels
              of experience. Plus, we provide free food at every event!
            </Paragraph>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col h-full"
                >
                  <div className="flex items-center mb-4">
                    {program.icon}
                    <h3 className="ml-3 text-lg font-bold text-gray-800">
                      {program.title}
                    </h3>
                  </div>
                  {/* TODO: Probably a more sustainable way to do this instead of dangerouslySetInnerHTML? */}
                  <div
                    className="text-gray-600 mb-6"
                    dangerouslySetInnerHTML={{ __html: program.description }}
                  ></div>
                  <div className="border-t border-gray-200 pt-4 mt-auto">
                    <p className="text-sm text-gray-600">
                      <strong className="text-[#F66813]">
                        Prerequisites:{" "}
                      </strong>
                      {program.prerequisites}
                      <br />
                      <strong className="text-[#F66813]">Duration: </strong>
                      {program.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditional Get Involved Section */}
        {applicationsOpen ? (
          <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-4xl text-center">
              <SectionTitle>Join PAIA</SectionTitle>
              <Paragraph className="mb-8">
                Whether you&apos;re new to AI alignment or an experienced
                researcher, we have a place for you in our community.
              </Paragraph>
              <div className="flex justify-center space-x-4 mt-6">
                <ApplyButton href="https://docs.google.com/forms/d/e/1FAIpQLSfah5RTTUt5cNT9367MHdqgZMLIdOGWn0ULzEn4unAzSw9aoQ/viewform">
                  Apply to our Seminars
                </ApplyButton>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-4xl text-center">
              <SectionTitle>Applications Coming Soon</SectionTitle>
              <Paragraph className="mb-8">
                Applications for Fall &apos;26 are on their way! Please fill
                out our{" "}
                <a
                  href="https://airtable.com/appurItpElOdUOB2m/pag4oxPBAkvmWKw1V/form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F66813] hover:text-[#E55703] font-semibold"
                >
                  interest form
                </a>{" "}
                to get notified when they&apos;re out. If you have any
                questions, reach out to{" "}
                <a
                  href="mailto:elianadu@princeton.edu"
                  className="text-[#F66813] hover:text-[#E55703] font-semibold"
                >
                  elianadu@princeton.edu
                </a>
                .
              </Paragraph>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
