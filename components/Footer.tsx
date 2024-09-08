import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@/components/GitHub";

const Footer = () => (
  <footer className="bg-[#c2410c] text-white py-6 px-2">
    <div className="container mx-auto flex items-center justify-center relative">
      {/* Centered content */}
      <div className="text-center">
        <Link href="/" passHref>
          <Image
            src="/paia.png"
            alt="Princeton AI Alignment Logo"
            width={40}
            height={30}
            className="mx-auto my-2 cursor-pointer"
          />
        </Link>
        <p className="text-sm">&copy; 2024 Princeton AI Alignment.</p>
        <small className="text-xs">Last updated September 2024.</small>
      </div>

      {/* GitHub Icon aligned to the right */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-2">
        <Link
          href="https://github.com/princetonaialignment/"
          passHref
          className="text-white hover:text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">GitHub</span>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
