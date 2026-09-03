import { FC } from "react";
import { FileText, ExternalLink } from "lucide-react";

export type Paper = {
  title: string;
  authors: string;
  year: number;
  url: string;
  description: string;
};

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

export default PaperCard;
