"use client";

import { FC, useEffect } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Paragraph from "@/components/Paragraph";
import { ApplyButton } from "@/components/Button";
import Footer from "@/components/Footer";
import Alumni from "@/components/AlumniSection";
import PaperCard, { Paper } from "@/components/PaperCard";
import Countdown from "@/components/Countdown";
import useApplicationStore from "@/app/stores/useApplicationStore";

const ourPapers: Paper[] = [
  {
    title: "Are Large Language Models Sensitive to the Motives Behind Communication?",
    authors: "Wu et al.",
    year: 2025,
    url: "https://neurips.cc/virtual/2025/loc/san-diego/poster/115960",
    description: `Investigates whether LLMs can recognize and account for human communicative intentions when evaluating information. Finds that while LLMs can discount biased sources in controlled settings, they struggle with real-world sponsored content — and that prompting models to consider source incentives significantly improves alignment with rational decision-making. Published at NeurIPS 2025.`,
  },
  {
    title: "CCS-Lib: A Python package to elicit latent knowledge from LLMs",
    authors: "Laurito et al.",
    year: 2025,
    url: "https://joss.theoj.org/papers/10.21105/joss.06511",
    description: `A Python package for implementing Contrast-Consistent Search (CCS) to extract truthful beliefs from language models, addressing the challenge of eliciting latent knowledge.`,
  },
  {
    title:
      "Prompt-Character Divergence: A Responsibility Compass for Human-AI Creative Collaboration",
    authors: "Maggie Wang, Wouter Haverals",
    year: 2025,
    url: "https://openreview.net/forum?id=szkyt49bN5",
    description: `A lightweight metric that quantifies semantic drift in AI-generated images, helping creators determine when outputs reflect their intent versus model-driven biases. Published at NeurIPS Creative AI Track 2025.`,
  },
  {
    title: "Dynamic Risk Assessment for Offensive Cybersecurity Agents",
    authors: "Wei et al.",
    year: 2025,
    url: "https://arxiv.org/abs/2505.18384",
    description: `A framework for dynamically assessing and managing risks in offensive cybersecurity agents, ensuring safe deployment of AI systems in security-critical contexts. Published at NeurIPS 2025 Datasets & Benchmarks Track.`,
  },
  {
    title: "Large Language Models Develop Novel Social Biases Through Adaptive Exploration",
    authors: "Wu et al.",
    year: 2025,
    url: "https://arxiv.org/abs/2511.06148",
    description: `Demonstrates that LLMs can spontaneously develop novel social biases about artificial demographic groups even when no inherent differences exist, resulting in highly stratified task allocations. These biases stem from exploration-exploitation trade-offs and are exacerbated by newer, larger models. Published at NeurIPS 2025 Workshop on Multi-Turn Interactions in Large Language Models (MTI-LLM).`,
  },
  {
    title: "Demo: Statistically Significant Results on Biases and Errors of LLMs Do Not Guarantee Generalizable Results",
    authors: "Liu et al.",
    year: 2025,
    url: "https://openreview.net/forum?id=9WjoHI44Gf",
    description: `Develops an infrastructure to probe medical chatbots using automatically generated queries across patient demographics, histories, and disorders. Finds that LLM annotators exhibit low agreement scores, and only specific LLM pairs yield statistically significant differences. Recommends using multiple LLM evaluators and publishing inter-LLM agreement metrics. Published at NeurIPS 2025 Workshop on GenAI for Health Potential, Trust, and Policy Compliance.`,
  },
];

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up max-w-4xl mx-auto px-4 sm:px-8 leading-tight break-words">
              We&apos;re a group of Princeton students working to reduce <span className="hover-underline-draw">catastrophic risk from advanced AI</span>.
            </h1>
            <div className="flex flex-col items-center space-y-4 mt-6 animate-fade-in-up animation-delay-300">
              <div className="flex flex-wrap justify-center gap-4">
                <ApplyButton
                  href="https://airtable.com/appurItpElOdUOB2m/pagDUkWLMIpZxdwFL/form"
                  external
                  showExternalIcon={false}
                  showArrow
                >
                  Join our mailing list
                </ApplyButton>
                <ApplyButton href="/programs" showArrow>
                  Get involved
                </ApplyButton>
              </div>
              {applicationsOpen && (
                <div className="flex justify-center space-x-4">
                  <ApplyButton href="https://docs.google.com/forms/d/e/1FAIpQLSfah5RTTUt5cNT9367MHdqgZMLIdOGWn0ULzEn4unAzSw9aoQ/viewform">
                    Apply to Our Seminars
                  </ApplyButton>
                </div>
              )}
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
              We believe that AI presents a magnitude of risks and benefits unmatched by any previous technology. To realize the benefits, we must address the risks. Let&apos;s navigate the transition to advanced AI <em>wisely</em>.
              </Paragraph>
              <div className="flex items-center justify-center py-4">
                <div className="w-full border-t border-gray-300"></div>
                <div className="w-full border-t border-gray-300"></div>
              </div>

              <SectionTitle>
              Princeton AI Alignment is a community working to make the future better.
              </SectionTitle>
              <Paragraph className="text-center">
              We support Princeton students and researchers through fellowships, speaker events, and mentorship. We help members learn the field, contribute in meaningful careers, and engage seriously with the high stakes of advanced AI.
              </Paragraph>
              <div className="flex justify-center pt-4">
                <a
                  href="/community"
                  className="bg-[#F66813] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E55703] transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>


        <Alumni />

        {/* Recent Papers Section */}
        <section className="py-28 px-6 bg-gray-100">
          <div className="container mx-auto max-w-6xl">
            <SectionTitle>Recent papers our members have written</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {ourPapers.map((paper, index) => (
                <PaperCard key={index} {...paper} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
