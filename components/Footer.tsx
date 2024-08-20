import Image from "next/image";

const Footer = () => (
  <footer className="bg-[#c2410c] text-white py-12 px-4">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Princeton AI Alignment. All rights reserved.</p>
      <Image
        src="/paia.png"
        alt="Princeton AI Alignment Logo"
        width={60}
        height={40}
        className="mx-auto"
      />
      <small>Last updated August 2024.</small>
    </div>
  </footer>
);

export default Footer;
