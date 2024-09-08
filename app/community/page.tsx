import { FC, ReactNode } from "react";
import SectionTitle from "@/components/SectionTitle";
import Paragraph from "@/components/Paragraph";
import Footer from "@/components/Footer";
import {
  Globe,
  Users,
  ArrowRight,
  Briefcase,
  School,
  Edit,
} from "lucide-react";

type ResourceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  links: { text: string; url: string }[];
};

const ResourceCard: FC<ResourceCardProps> = ({
  icon,
  title,
  description,
  links,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full min-h-[400px]">
    <div className="flex items-center mb-4">
      <div className="text-[#F66813] mr-3">{icon}</div>
      <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4 flex-grow">{description}</p>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            className="text-[#F66813] hover:text-[#E55703] flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowRight size={16} className="mr-1 flex-shrink-0" />
            <span>{link.text}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Community: FC = () => {
  const resources = [
    {
      icon: <Globe size={24} />,
      title: "Online Courses",
      description:
        "Free online courses to deepen your understanding of AI alignment.",
      links: [
        {
          text: "Princeton AI Safety Course (COS 597Q)",
          url: "https://sites.google.com/view/cos598aisafety/",
        },
        {
          text: "Intro to AI Safety, Ethics, and Society",
          url: "https://www.aisafetybook.com/",
        },
        {
          text: "AGI Safety Fundamentals",
          url: "https://aisafetyfundamentals.com/",
        },
        {
          text: "Intro to ML Safety",
          url: "https://course.mlsafety.org/",
        },
        {
          text: "CSC2547: AI Alignment",
          url: "https://alignment-w2024.notion.site/CSC2547-AI-Alignment-b44359978f3a4a8f95c90adb0a6e7d53",
        },
      ],
    },
    {
      icon: <Users size={24} />,
      title: "Research Groups",
      description: "Leading organizations in AI alignment research.",
      links: [
        { text: "Anthropic", url: "https://www.anthropic.com/research" },
        {
          text: "OpenAI",
          url: "https://openai.com/safety/",
        },
        {
          text: "Redwood Research",
          url: "https://www.redwoodresearch.org/research",
        },
        {
          text: "Center for Human-Compatible AI",
          url: "https://humancompatible.ai/research",
        },
        {
          text: "Machine Intelligence Research Institute",
          url: "https://intelligence.org/research/",
        },
      ],
    },
    {
      icon: <Briefcase size={24} />,
      title: "Career Resources",
      description: "Explore career opportunities in AI safety and alignment.",
      links: [
        { text: "AI Safety Support", url: "https://aisafetysupport.org/" },
        {
          text: "AI Safety Job Board",
          url: "https://www.aisafety.careers/opportunities",
        },
        {
          text: "80,000 Hours AI Safety Career Guide",
          url: "https://80000hours.org/problem-profiles/artificial-intelligence/",
        },
        {
          text: "80,000 Hours Job Board",
          url: "https://jobs.80000hours.org/",
        },
        {
          text: "Working in AI Policy",
          url: "https://80000hours.org/articles/ai-policy-guide/",
        },
      ],
    },
    {
      icon: <School size={24} />,
      title: "Academic Programs",
      description: "AI safety and alignment efforts at other universities.",
      links: [
        {
          text: "Berkeley AI Safety Initiative",
          url: "https://berkeleyaisafety.com/",
        },
        { text: "MIT AI Alignment", url: "https://mitalignment.org/" },
        {
          text: "Stanford Center for AI Safety",
          url: "https://aisafety.stanford.edu/",
        },
        { text: "Harvard AI Safety Student Team", url: "https://haist.ai/" },
        {
          text: "AI Safety Initiative at Georgia Tech",
          url: "https://www.aisi.dev/",
        },
      ],
    },
  ];

  const blogs = [
    {
      title: "AI Alignment Forum",
      description: "A hub for technical research on beneficial AI.",
      url: "https://www.alignmentforum.org/",
    },
    {
      title: "LessWrong",
      description:
        "A community blog focused on refining the art of human rationality.",
      url: "https://www.lesswrong.com/",
    },
    {
      title: "AI Impacts",
      description:
        "Exploring the potential consequences of advanced artificial intelligence.",
      url: "https://aiimpacts.org/",
    },
    {
      title: "Paul Christiano's Blog",
      description: "Paul Christiano's insights on value alignment.",
      url: "https://ai-alignment.com/",
    },
    {
      title: "colah's blog",
      description:
        "Christopher Olah's deep dives into neural networks and mechanistic interpretability.",
      url: "https://colah.github.io/",
    },
    {
      title: "Bounded Regret",
      description:
        "Jacob Steinhardt's thoughts on AI safety and the future of AI.",
      url: "https://bounded-regret.ghost.io/",
    },
    {
      title: "For Our Posterity",
      description:
        "Leopold Aschenbrenner's perspectives on long-term thinking and existential risk.",
      url: "https://www.forourposterity.com/",
    },
    {
      title: "Lil'Log",
      description: "Lilian Weng's blog on practical AI safety and alignment.",
      url: "https://lilianweng.github.io/",
    },
    {
      title: "Neel Nanda's Blog",
      description:
        "Neel Nanda's reflections on AI development and personal growth.",
      url: "https://www.neelnanda.io/",
    },
  ];

  return (
    <div className="bg-[#F66813] text-gray-800">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r bg-[#F66813] text-white py-20 px-4 relative overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Community Resources
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Connect with the AI alignment community.
            </p>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <SectionTitle>AI Alignment Resources</SectionTitle>
            <Paragraph className="mb-12 text-center max-w-3xl mx-auto">
              Dive into the world of AI alignment with our curated list of
              resources. Whether you&apos;re new to the field or looking to
              deepen your understanding, we&apos;ve got you covered.
            </Paragraph>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
          </div>
        </section>

        {/* Blogs We Like Section */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <SectionTitle>Blogs We Like</SectionTitle>
            <Paragraph className="mb-12 text-center max-w-3xl mx-auto">
              Stay informed with these insightful blogs covering AI alignment
              and the latest developments in AI research.
            </Paragraph>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg p-6 flex flex-col h-full min-h-[350px]"
                >
                  <div className="flex items-center mb-4">
                    <Edit size={24} className="text-[#F66813] mr-3" />
                    <h3 className="text-lg md:text-xl font-semibold">
                      {blog.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {blog.description}
                  </p>
                  <a
                    href={blog.url}
                    className="text-[#F66813] hover:text-[#E55703] flex items-center mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowRight size={16} className="mr-1 flex-shrink-0" />
                    <span>Visit Blog</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Engagement Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-4xl text-center">
            <SectionTitle>Join The Discussion</SectionTitle>
            <Paragraph className="mb-8">
              Join the AI safety community, participate in discussions, and
              collaborate on research.
            </Paragraph>
            <div className="bg-white shadow-md rounded-lg p-6 inline-block">
              <h3 className="font-semibold text-lg mb-4">
                AI Safety Communities
              </h3>
              <a
                href="https://www.aisafety.com/communities"
                className="text-[#F66813] hover:text-[#E55703] flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore AI Safety Communities
                <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
