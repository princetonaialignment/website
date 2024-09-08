"use client";

import { FC, useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";

type NavItemProps = {
  href: string;
  children: ReactNode;
};

const NavItem: FC<NavItemProps> = ({ href, children }) => (
  <Link
    href={href}
    className="text-white hover:text-orange-300 transition-colors duration-300 text-sm sm:text-base lg:text-lg font-medium"
  >
    {children}
  </Link>
);

const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const fullText = "Princeton AI Alignment";
  const shortText = "PAIA";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Community", path: "/community" },
    { name: "Papers", path: "/papers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-50 ease-in-out ${
        scrolled ? "bg-[#c2410c]" : "bg-[#F66813]"
      }`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo with Link to Homepage */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-white transition-colors duration-150"
            >
              <AnimatePresence mode="wait">
                {!scrolled ? (
                  <motion.span
                    key="full"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 ease-in-out"
                  >
                    {fullText}
                  </motion.span>
                ) : (
                  <motion.span
                    key="short"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 ease-in-out"
                  >
                    {shortText}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-10">
            {navItems.map((item) => (
              <NavItem key={item.name} href={item.path}>
                {item.name}
              </NavItem>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-orange-300 transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#c2410c]"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-white hover:bg-[#b73a0a] block px-4 py-3 rounded-md text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
