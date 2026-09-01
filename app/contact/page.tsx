"use client";

import { FC, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Paragraph from "@/components/Paragraph";
import Footer from "@/components/Footer";
import { Mail, Send, Video } from "lucide-react";

const Contact: FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("elianadu@princeton.edu").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r bg-[#F66813] text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Contact Us
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Get in touch with PAIA.
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-28 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row">
              {/* Mailing List Section */}
              <div className="flex-1 px-6 md:px-12 mb-12 md:mb-0 flex flex-col">
                <div className="flex-grow">
                  <SectionTitle>Stay Connected</SectionTitle>
                  <div className="mb-8 min-h-[100px]">
                    <Paragraph>
                      Join our mailing list to stay updated on the latest
                      events, research, and opportunities in AI alignment and
                      safety.
                    </Paragraph>
                  </div>
                </div>
                <div className="text-center mt-auto">
                  <a
                    href="https://airtable.com/appurItpElOdUOB2m/pagDUkWLMIpZxdwFL/form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#F66813] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#E55703] transition duration-300"
                  >
                    <Send size={20} className="mr-2" />
                    Join Mailing List
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-gray-300 mx-8"></div>

              {/* Direct Contact Section */}
              <div className="flex-1 px-6 md:px-12 flex flex-col">
                <div className="flex-grow">
                  <SectionTitle>Contact Us</SectionTitle>
                  <div className="mb-8 min-h-[100px]">
                    <Paragraph>
                      Have a question or want to get involved? Reach out to us
                      directly via email or by booking a meeting.
                    </Paragraph>
                  </div>
                </div>
                <div className="text-center mt-auto flex flex-col sm:flex-row justify-center gap-4">
                  <div className="relative group">
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center justify-center bg-[#F66813] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#E55703] transition duration-300"
                    >
                      <Mail size={20} className="mr-2" />
                      Email Us
                    </button>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      {copied ? "Copied!" : "Click to copy"}
                    </span>
                  </div>
                  <a
                    href="https://app.cal.com/elianadu/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#F66813] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#E55703] transition duration-300"
                  >
                    <Video size={20} className="mr-2" />
                    Meet with Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
