"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { Linkedin, Mail, CalendarDays } from "lucide-react";
import GitHubIcon from "@/components/GitHub";

type OfficerProps = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  github?: string;
  linkedin?: string;
  email?: string;
  calLink?: string;
};

const OfficerCard: FC<OfficerProps> = ({
  name,
  role,
  bio,
  imageUrl,
  github,
  linkedin,
  email,
  calLink,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (!email) return;
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
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
      <p className="text-gray-600 mb-4 text-center">{role}</p>
      <div className="h-32 overflow-y-auto mb-6 w-full">
        <p
          className="text-gray-800 text-center"
          dangerouslySetInnerHTML={{ __html: bio }}
        ></p>
      </div>
      <div className="flex space-x-4 mt-auto">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <GitHubIcon size={24} />
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
          <div className="relative group">
            <button
              onClick={handleCopyEmail}
              className="text-gray-600 hover:text-gray-900"
              aria-label={`Copy ${name}'s email`}
            >
              <Mail size={24} />
            </button>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {copied ? "Copied!" : "Click to copy"}
            </span>
          </div>
        )}
        {calLink && (
          <div className="relative group">
            <a
              href={calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
              aria-label={`Meet with ${name}`}
            >
              <CalendarDays size={24} />
            </a>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Meet with {name.split(" ")[0]}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfficerCard;
