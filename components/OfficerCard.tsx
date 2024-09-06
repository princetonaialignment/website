import { FC } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

interface OfficerProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const OfficerCard: FC<OfficerProps> = ({
  name,
  role,
  bio,
  imageUrl,
  github,
  linkedin,
  email,
}) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center h-full">
    <div className="relative w-40 h-40 mb-4">
      <Image
        src={imageUrl}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-full object-cover"
      />
    </div>
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600 mb-4">{role}</p>
    <div className="h-32 overflow-y-auto mb-6 w-full">
      <p className="text-gray-800 text-center">{bio}</p>
    </div>
    <div className="flex space-x-4 mt-auto">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          <Github size={24} />
        </a>
      )}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          <Linkedin size={24} />
        </a>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          className="text-gray-600 hover:text-gray-900"
        >
          <Mail size={24} />
        </a>
      )}
    </div>
  </div>
);

export default OfficerCard;
