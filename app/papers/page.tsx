import { FC } from "react";
import { FileText, ExternalLink } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import Paragraph from "@/components/Paragraph";
import Footer from "@/components/Footer";

type Paper = {
  title: string;
  authors: string;
  year: number;
  url: string;
  description: string;
};

const foundationPapers: Paper[] = [
  {
    title: "AI Alignment: A Comprehensive Survey",
    authors: "Ji et al.",
    year: 2024,
    url: "https://arxiv.org/pdf/2310.19852",
    description: `Provides a comprehensive yet beginner-friendly review of alignment research topic.`,
  },
  {
    title: "AI Governance: A Research Agenda",
    authors: "Dafoe",
    year: 2018,
    url: "https://www.fhi.ox.ac.uk/wp-content/uploads/GovAI-Agenda.pdf",
    description: `Outlines key questions and challenges relating to AI governance and policy.`,
  },
  {
    title: "Concrete Problems in AI Safety",
    authors: "Amodei et al.",
    year: 2016,
    url: "https://arxiv.org/pdf/1606.06565",
    description: `Presents practical research problems in AI safety.`,
  },
  {
    title: "The Alignment Problem from a Deep Learning Perspective",
    authors: "Ngo et al.",
    year: 2024,
    url: "https://arxiv.org/pdf/2209.00626",
    description: `Discusses the challenges of aligning advanced AI models from the deep learning paradigm with human values and intentions.`,
  },
  {
    title: "An Overview of Catastrophic AI Risks",
    authors: "Hendrycks et al.",
    year: 2023,
    url: "https://arxiv.org/pdf/2306.12001",
    description: `Provides an overview of the main sources of catastrophic AI risks.`,
  },
  {
    title: "Unsolved Problems in ML Safety",
    authors: "Hendrycks et al.",
    year: 2022,
    url: "https://arxiv.org/pdf/2109.13916",
    description: `Identifies four key areas of unsolved problems in machine learning safety.`,
  },
];

const technicalPapers: Paper[] = [
  {
    title:
      "Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet",
    authors: "Templeton et al.",
    year: 2024,
    url: "https://transformer-circuits.pub/2024/scaling-monosemanticity/",
    description: `A big milestone in the mechanistic interpretability of large neural networks.`,
  },
  {
    title: "The Off-Switch Game",
    authors: "Hadfield-Menell et al.",
    year: 2017,
    url: "https://arxiv.org/pdf/1611.08219",
    description: `A game-theoretic view on AI self-preservation.`,
  },
  {
    title:
      "Training Language Models to Follow Instructions with Human Feedback",
    authors: "Ouyang et al.",
    year: 2022,
    url: "https://arxiv.org/pdf/2203.02155",
    description: `RLHF, the prevailing technique used to align AI systems with human values.`,
  },
  {
    title: "Weak-To-Strong Generalization",
    authors: "Burns et al.",
    year: 2023,
    url: "https://openai.com/index/weak-to-strong-generalization/",
    description: `A new research direction for how human intelligence can take steps to align superhuman intelligence.`,
  },
];

const PaperCard: FC<Paper> = ({ title, authors, year, url, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full min-h-[400px]">
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
        {title}
      </h3>
      <p className="text-base md:text-sm text-gray-600 mb-2">
        {authors} • {year}
      </p>
      <p className="text-base md:text-gray-700 text-gray-800 mb-4 flex-grow">
        {description}
      </p>
      <div className="mt-auto">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read ${title}`}
          className="inline-flex items-center text-[#F66813] hover:text-[#E55703] transition-colors duration-300 text-base md:text-sm"
        >
          <FileText size={18} className="mr-2" />
          Read
          <ExternalLink size={18} className="ml-1" />
        </a>
      </div>
    </div>
  </div>
);

const Papers: FC = () => {
  return (
    <div className="bg-[#F66813] text-gray-800">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r bg-[#F66813] text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Research Papers
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              A curated list of key publications shaping the field of AI
              safety and alignment.
            </p>
          </div>
        </section>

        {/* Safety Papers Section */}
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <SectionTitle>Foundation</SectionTitle>
            <div className="mb-12 text-center">
              <Paragraph>
                Essential readings to build a strong foundation for the alignment problem.
              </Paragraph>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {foundationPapers.map((paper, index) => (
                <PaperCard key={index} {...paper} />
              ))}
            </div>
          </div>
        </section>

        {/* Technical Papers Section */}
        <section className="py-20 md:py-28 px-6 bg-gray-100">
          <div className="container mx-auto max-w-6xl">
            <SectionTitle>Technical</SectionTitle>
            <div className="mb-12 text-center">
              <Paragraph>
                The engineering/mathematical side of AI safety and alignment.
              </Paragraph>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalPapers.map((paper, index) => (
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

export default Papers;
