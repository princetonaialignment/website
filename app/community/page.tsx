import { FC } from "react";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

type ResourceLink = {
  title: string;
  description: string;
  url: string;
};

const LinkCard: FC<ResourceLink> = ({ title, description, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
  >
    <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4 flex-grow">{description}</p>
    <span className="text-[#F66813] flex items-center mt-auto">
      <ArrowRight size={16} className="mr-1 flex-shrink-0" />
      Visit
    </span>
  </a>
);

const Community: FC = () => {
  const startHere: ResourceLink[] = [
    {
      title: "The Problem",
      description:
        "MIRI's introduction to why smarter-than-human AI could be an existential risk.",
      url: "https://www.lesswrong.com/posts/kgb58RL88YChkkBNf/the-problem",
    },
    {
      title: "aisafety.com",
      description:
        "A hub for AI existential safety, with curated lists of jobs, communities, courses, and more.",
      url: "https://aisafety.com/",
    },
    {
      title: "AI Safety Opportunities",
      description:
        "A live directory of AI safety programs, fellowships, and openings.",
      url: "https://aisopportunities.com/",
    },
  ];

  const community: ResourceLink[] = [
    {
      title: "The Alignment Forum",
      description: "A hub for technical AI alignment research and discussion.",
      url: "https://www.alignmentforum.org/",
    },
    {
      title: "LessWrong",
      description:
        "Community blog focusing on rationality and AI safety.",
      url: "https://www.lesswrong.com/",
    },
  ];

  const blogs: ResourceLink[] = [
    {
      title: "Redwood Research Blog",
      description:
        "Technical AI alignment research and interpretability work.",
      url: "https://blog.redwoodresearch.org",
    },
    {
      title: "Unresolved Debates About the Future of AI",
      description:
        "Helen Toner outlines key disagreements shaping AI governance and long-term safety priorities.",
      url: "https://helentoner.substack.com/p/unresolved-debates-about-the-future",
    },
    {
      title: "Technological Optimism and Appropriate Fear",
      description:
        "Jack Clark's newsletter on balancing optimism and caution in AI development.",
      url: "https://importai.substack.com/p/import-ai-431-technological-optimism",
    },
    {
      title: "Planned Obsolescence",
      description:
        "Ajeya Cotra's Substack on preparing for a future where AI transforms nearly everything.",
      url: "https://www.planned-obsolescence.org/",
    },
    {
      title: "Don't Worry About the Vase",
      description: "Zvi Mowshowitz's weekly roundup of AI news and analysis.",
      url: "https://thezvi.substack.com/",
    },
    {
      title: "Transformer",
      description:
        "Shakeel Hashim's newsletter on the power and politics of transformative AI.",
      url: "https://www.transformernews.ai/",
    },
  ];

  const podcasts: ResourceLink[] = [
    {
      title: "The 80,000 Hours Podcast",
      description:
        "In-depth interviews about the world's most pressing problems, including AI safety.",
      url: "https://80000hours.org/podcast/",
    },
    {
      title: "Dwarkesh Podcast",
      description:
        "Deep conversations with leading AI researchers and thinkers about the future of AI.",
      url: "https://www.youtube.com/@DwarkeshPatel",
    },
  ];

  return (
    <div className="bg-[#F66813] text-gray-800">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r bg-[#F66813] text-white py-20 px-4 relative overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Resources
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Connect with the AI alignment community.
            </p>
          </div>
        </section>

        {/* Start Here Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <SectionTitle>Start Here</SectionTitle>
            <div className="mb-8 rounded-lg overflow-hidden shadow-md bg-white w-full md:w-2/3 mx-auto">
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/5KVDDfAkRgc"
                  title="We're Not Ready for Superintelligence"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold">
                  We&apos;re Not Ready for Superintelligence
                </h3>
                <p className="text-gray-600">AI In Context</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {startHere.map((link, index) => (
                <LinkCard key={index} {...link} />
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <SectionTitle>Community</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {community.map((link, index) => (
                <LinkCard key={index} {...link} />
              ))}
            </div>
          </div>
        </section>

        {/* Blogs & Articles Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <SectionTitle>Blogs &amp; Articles</SectionTitle>
            <div className="flex flex-wrap justify-center gap-8">
              {blogs.map((link, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)]"
                >
                  <LinkCard {...link} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Podcasts Section */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <SectionTitle>Podcasts</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {podcasts.map((link, index) => (
                <LinkCard key={index} {...link} />
              ))}
            </div>
          </div>
        </section>

        {/* Full Resource List Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-4xl text-center">
            <SectionTitle>Want More?</SectionTitle>
            <div className="bg-white shadow-md rounded-lg p-6 inline-block">
              <a
                href="https://docs.google.com/document/d/1F94lHey4U5Y_GkRjhpwju2o77yZs_jRlwHxy0yefkEQ/edit?usp=sharing"
                className="text-[#F66813] hover:text-[#E55703] flex items-center justify-center font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the Full Resource List
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
