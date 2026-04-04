"use client";

import { FC, useEffect } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Paragraph from "@/components/Paragraph";
import { ApplyButton } from "@/components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Alumni from "@/components/AlumniSection";
import { Book, Briefcase, Users, Award, Code } from "lucide-react";
import Countdown from "@/components/Countdown";
import useApplicationStore from "@/app/stores/useApplicationStore";

const Home: FC = () => {
  const { applicationsOpen, setApplicationsOpen } = useApplicationStore();

  const deadline = "September 14, 2025 23:59:00";

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
            <div className="flex flex-col items-center space-y-4 mt-6">
              {applicationsOpen && (
                <div className="flex justify-center space-x-4">
                  <ApplyButton href="https://docs.google.com/forms/d/e/1FAIpQLSfah5RTTUt5cNT9367MHdqgZMLIdOGWn0ULzEn4unAzSw9aoQ/viewform">
                    Apply to Our Seminars
                  </ApplyButton>
                </div>
              )}
              <div className="flex justify-center">
                <ApplyButton href="/contact">
                  Get Involved
                </ApplyButton>
              </div>
            </div>
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
              AI is advancing rapidly and will reshape society—science, education, markets, and national security. But unlike most technologies, advanced AI is highly general and scalable: small failures can compound as systems become more capable and more autonomous. The core challenge is alignment: making AI systems reliable, interpretable, and robustly guided by human values and intent, even under pressure and in unfamiliar situations.
              </Paragraph>
              <div className="flex items-center justify-center py-4">
                <div className="w-full border-t border-gray-300"></div>
                <div className="w-full border-t border-gray-300"></div>
              </div>

              <SectionTitle>
              We work to ensure AI is developed to benefit humanity’s future
              </SectionTitle>
              <Paragraph>
              Princeton AI Alignment is building a campus community for this work. We support Princeton students and researchers through fellowships, speaker events, project teams, and mentorship—helping members learn the field, contribute to research, and engage seriously with the technical and societal stakes of advanced AI.
              </Paragraph>
              <div className="flex justify-center pt-4">
                <a
                  href="https://forms.gle/ocD73Ron7rUBTjCr6"
                  className="bg-[#F66813] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E55703] transition duration-300"
                >
                  Get Involved
                </a>
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
                title="Intro Fellowships"
                description="Join our 8-week seminar program to learn the fundamentals of AI alignment and governance."
                linkText="Apply Now"
                href="/programs"
              />
              <Card
                icon={Users}
                title="Advanced Technical Fellowship"
                description="Read state-of-the-art alignment research papers in our advanced fellowship."
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
