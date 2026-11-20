import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { themeConfig } from "../../config/themeConfig";
import BrandLogo from "../common/BrandLogo";
import Button from "../common/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { navigation } = themeConfig;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed md:absolute top-0 left-0 right-0 z-40 transition-all duration-300 py-4 sm:py-5 md:py-7 lg:py-9 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10 md:bg-transparent md:backdrop-blur-none md:border-b-0"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          <BrandLogo imgClassName="h-12 sm:h-14 md:h-14 lg:h-18 w-auto object-contain" />

          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-11"
            aria-label="Main Navigation"
          >
            {navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-xs lg:text-[13px] uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors duration-200 font-medium py-1"
                style={{ fontFamily: themeConfig.fonts.subHeading }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <Button
              href={navigation.cta.href}
              variant="primary"
              className="ml-3"
            >
              {navigation.cta.label}
            </Button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-white/90 hover:text-white rounded-md hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
