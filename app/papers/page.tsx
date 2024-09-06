import { FC } from "react";
import { FileText, ExternalLink } from "lucide-react";

interface Paper {
  title: string;
  authors: string;
  year: number;
  url: string;
  description: string;
}

const papers: Paper[] = [
  {
    title: "Concrete Problems in AI Safety",
    authors: "Dario Amodei, Chris Olah, et al.",
    year: 2016,
    url: "https://arxiv.org/abs/1606.06565",
    description:
      "This paper outlines five practical research problems in AI safety, including avoiding negative side effects and scalable oversight.",
  },
  {
    title: "The Alignment Problem from a Deep Learning Perspective",
    authors: "Richard Ngo, Toby Ord, et al.",
    year: 2022,
    url: "https://arxiv.org/abs/2209.00626",
    description:
      "This paper discusses the challenge of aligning advanced AI systems with human values and intentions, focusing on deep learning systems.",
  },
  {
    title: "Scalable Oversight of AI Systems via Selective Delegation",
    authors: "Andrew Critch, Stuart Russell",
    year: 2020,
    url: "https://arxiv.org/abs/1802.07228",
    description:
      "This paper proposes a framework for delegating decisions to AI systems while maintaining human control over important decisions.",
  },
  {
    title: "AI Governance: A Research Agenda",
    authors: "Allan Dafoe",
    year: 2018,
    url: "https://www.fhi.ox.ac.uk/wp-content/uploads/GovAI-Agenda.pdf",
    description:
      "This paper outlines key questions and challenges in the governance of artificial intelligence, including policy and ethical considerations.",
  },
  {
    title: "Cooperative AI: Machines Must Learn to Find Common Ground",
    authors: "Allan Dafoe, Yoram Bachrach, et al.",
    year: 2021,
    url: "https://www.nature.com/articles/d41586-021-00184-w",
    description:
      "This paper argues for the importance of developing AI systems that can cooperate effectively with humans and other AI systems.",
  },
  {
    title: "The Precipice: Existential Risk and the Future of Humanity",
    authors: "Toby Ord",
    year: 2020,
    url: "https://theprecipice.com/",
    description:
      "While not exclusively about AI, this book provides a comprehensive analysis of existential risks, including those posed by advanced AI.",
  },
];

const PaperCard: FC<Paper> = ({ title, authors, year, url, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">
        {authors} • {year}
      </p>
      <p className="text-gray-700 mb-4 flex-grow">{description}</p>
      <div className="mt-auto">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#F66813] hover:text-[#E55703] transition-colors duration-300"
        >
          <FileText size={18} className="mr-2" />
          Read Paper
          <ExternalLink size={18} className="ml-1" />
        </a>
      </div>
    </div>
  </div>
);

const Papers: FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#F66813] to-[#c2410c] text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Safety Research Papers
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore key publications shaping the field of AI alignment and
            safety.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Essential Reading in AI Safety
        </h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          This curated collection highlights some of the most influential and
          thought-provoking papers in the field of AI safety and alignment.
          These works provide crucial insights into the challenges and potential
          solutions for ensuring advanced AI systems remain beneficial and
          aligned with human values.
        </p>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {papers.map((paper, index) => (
            <PaperCard key={index} {...paper} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Papers;
