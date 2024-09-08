"use client";

import { FC, useEffect } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Paragraph from "@/components/Paragraph";
import { Button, ApplyButton } from "@/components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Alumni from "@/components/AlumniSection";
import { Book, Briefcase, Users, Award, Code } from "lucide-react";
import Countdown from "@/components/Countdown";
import useApplicationStore from "@/app/stores/useApplicationStore";

const Home: FC = () => {
  const { applicationsOpen, setApplicationsOpen } = useApplicationStore();

  const deadline = "September 14, 2024 23:59:00";

  // Check if the deadline has passed when the component mounts
  useEffect(() => {
    const checkIfDeadlinePassed = () => {
      const now = new Date().getTime();
      const deadlineTime = new Date(deadline).getTime();
      if (now > deadlineTime) {
        setApplicationsOpen(false); // Update Zustand store to close applications
      }
    };

    checkIfDeadlinePassed(); // Perform the check on mount
  }, [deadline, setApplicationsOpen]);

  const handleExpire = () => {
    setApplicationsOpen(false); // Close applications when countdown expires
  };

  return (
    <div className="bg-[#F66813] text-gray-800">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#F66813] to-[#F76C2B] text-white py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image
              src="/cover.png"
              alt="Cover Image"
              fill
              priority
              className="object-cover z-0"
              draggable="false"
            />
          </div>
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-6xl font-bold mb-6 animate-fade-in-up">
              Princeton AI Alignment
            </h1>
            <p className="text-2xl mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              A community working to reduce risks from advanced AI.
            </p>
            {applicationsOpen && (
              <div className="flex justify-center space-x-4 mt-6">
                <ApplyButton href="https://airtable.com/appsSKn5Zey1xrPDZ/pagPbdsS40O7CLBN3/form">
                  Apply to Intro to AI Alignment Seminar
                </ApplyButton>
                <ApplyButton href="https://airtable.com/appsSKn5Zey1xrPDZ/paglkIIzLl5122Uen/form">
                  Apply to Advanced Reading Group
                </ApplyButton>
              </div>
            )}
            <div className="text-xl mt-8">
              <Countdown deadline={deadline} onExpire={handleExpire} />
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section id="mission" className="py-28 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <SectionTitle>Our Mission</SectionTitle>
            <div className="space-y-8">
              <Paragraph>
                AI will soon radically transform our society, for better or
                worse. Experts broadly expect significant progress in AI during
                our lifetimes, potentially to the point of achieving human-level
                intelligence. Digital systems with such capabilities would
                revolutionize every aspect of our society, from business, to
                politics, to culture. Worryingly, these machines will not be
                beneficial by default, and public interest is often in tension
                with the incentives of the many actors developing this
                technology.
              </Paragraph>
              <div className="flex items-center justify-center py-4">
                <div className="w-full border-t border-gray-300"></div>
                <div className="w-full border-t border-gray-300"></div>
              </div>

              <SectionTitle>
                We work to ensure AI is developed to benefit humanity&apos;s
                future
              </SectionTitle>
              <Paragraph>
                Absent a dedicated safety effort, AI systems will outpace our
                ability to explain their behavior, instill our values into their
                objectives, and build robust safeguards against their failures.
                Our organization empowers students and researchers at Princeton
                University to contribute to the field of AI safety and
                alignment.
              </Paragraph>
            </div>
          </div>
        </section>

        {/* Workshops Section */}
        <section id="workshops" className="py-28 px-6 bg-gray-100">
          <div className="container mx-auto">
            <SectionTitle>Workshops</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <Paragraph>
                  Hands-on workshops to learn about the engineering side of AI
                  safety.
                </Paragraph>
                <Button
                  href="https://github.com/princetonaialignment/workshops/"
                  showArrow={true}
                >
                  Coming soon!
                </Button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <Image
                  src="/sae-cover.png"
                  alt="Workshop illustration"
                  width={1940}
                  height={1940}
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </section>

        <Alumni />

        {/* Get Involved Section */}
        <section id="get-involved" className="py-28 px-6 bg-gray-100">
          <div className="container mx-auto">
            <SectionTitle>Get Involved</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card
                icon={Book}
                title="Introductory Seminars"
                description="Join our 8-week seminar program to learn the fundamentals of AI alignment and governance."
                linkText="Apply Now"
                href="/programs"
              />
              <Card
                icon={Users}
                title="Advanced Reading Group"
                description="Read state-of-the-art alignment research papers in our advanced reading group."
                linkText="Apply Now"
                href="/programs"
              />
              <Card
                icon={Code}
                title="Research Opportunities"
                description="Contribute to AI alignment research with guidance from experienced mentors."
                linkText="Contact Us"
                href="/contact"
              />
              <Card
                icon={Briefcase}
                title="Jobs in AI Safety"
                description="Explore career opportunities in AI Safety at leading organizations."
                linkText="View Positions"
                href="https://jobs.80000hours.org/?refinementList%5Btags_area%5D%5B0%5D=AI%20safety%20%26%20policy"
              />
              <Card
                icon={Award}
                title="Contests and Hackathons"
                description="Participate in worldwide AI safety and security competitions and collaborative research events."
                linkText="See Events"
                href="https://www.apartresearch.com/"
              />
              <Card
                icon={Award}
                title="AI Alignment Awards"
                description="Tackle open problems in AI safety and win prizes up to $50,000."
                linkText="Learn More"
                href="https://www.mlsafety.org/safebench"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
