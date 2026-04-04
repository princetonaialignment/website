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
    title:
      "Dynamic Risk Assessment for Offensive Cybersecurity Agents",
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

        {/* Our Papers Section */}
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <SectionTitle>Papers We&apos;ve Written</SectionTitle>
            <div className="mb-12 text-center">
              <Paragraph>
                Research contributions from PAIA members advancing the field of AI safety and alignment.
              </Paragraph>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ourPapers.map((paper, index) => (
                <PaperCard key={index} {...paper} />
              ))}
            </div>
          </div>
        </section>

        {/* Safety Papers Section */}
        <section className="py-20 md:py-28 px-6 bg-gray-100">
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
        <section className="py-20 md:py-28 px-6 bg-white">
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
