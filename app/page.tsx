import { FC } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import SubsectionTitle from "@/components/SubsectionTitle";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { Book, Briefcase, Users, Award, Code } from "lucide-react";

const Home: FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r bg-[#F66813] text-white py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image
              src="/cover.png"
              alt="Cover Image"
              fill
              priority
              className="object-cover z-0"
            />
          </div>
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-6xl font-bold mb-6 animate-fade-in-up">
              Princeton AI Alignment
            </h1>
            <p className="text-2xl mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              A community working to reduce risks from advanced AI.
            </p>

            <Button href="#mission">Learn More</Button>
          </div>
        </section>

        {/* Our Mission Section */}
        <section id="mission" className="py-28 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <SectionTitle>Our Mission</SectionTitle>
            <div className="space-y-8">
              <Paragraph>
                AI may soon radically transform our society, for better or
                worse. Experts broadly expect significant progress in AI during
                our lifetimes, potentially to the point of achieving human-level
                intelligence. Digital systems with such capabilities would
                revolutionize every aspect of our society, from business, to
                politics, to culture. Worryingly, these machines will not be
                beneficial by default, and public interest is often in tension
                with the incentives of the many actors developing this
                technology.
              </Paragraph>
              <Button href="#learn-more">Learn More</Button>

              <SubsectionTitle>
                We work to ensure AI is developed to benefit humanity&apos;s future
              </SubsectionTitle>
              <Paragraph>
                Absent a dedicated safety effort, AI systems will outpace our
                ability to explain their behavior, instill our values in their
                objectives, and to build robust safeguards against their
                failures. Our organization empowers students and researchers at
                Princeton to contribute to the field of AI safety.
              </Paragraph>
              <Button href="#mailing-list">Join Mailing List</Button>
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
                <Button href="#view-notebooks">View Notebooks</Button>
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

        {/* Get Involved Section */}
        <section id="get-involved" className="py-28 px-6 bg-white">
          <div className="container mx-auto">
            <SectionTitle>Get Involved</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card
                icon={Book}
                title="Introductory Seminars"
                description="Join our 8-week reading and discussion groups diving into AI alignment and governance."
                linkText="Apply Now"
                href="#introductory-seminars"
              />
              <Card
                icon={Users}
                title="Advanced Reading Group"
                description="Deepen your understanding of AI alignment and related research in our advanced group."
                linkText="Learn More"
                href="#advanced-reading-group"
              />
              <Card
                icon={Code}
                title="Research Opportunities"
                description="Contribute to AI alignment research with guidance from experienced mentors."
                linkText="Contact Us"
                href="#contact-us"
              />
              <Card
                icon={Briefcase}
                title="Jobs in AI Safety"
                description="Explore career opportunities in AI Safety at leading organizations."
                linkText="View Positions"
                href="#ai-safety-positions"
              />
              <Card
                icon={Award}
                title="Contests and Hackathons"
                description="Participate in worldwide AI safety competitions and collaborative research events."
                linkText="Join Events"
                href="#alignment-jam-hackathons"
              />
              <Card
                icon={Award}
                title="AI Alignment Awards"
                description="Tackle open problems in AI Safety and win prizes up to $100,000."
                linkText="Learn More"
                href="#ai-alignment-awards"
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
