import React, { useEffect } from "react";
import { X } from "lucide-react";
import { themeConfig } from "../../config/themeConfig";
import Button from "../common/Button";
import BrandLogo from "../common/BrandLogo";

export default function MobileMenu({ isOpen, onClose }) {
  const { navigation, brand } = themeConfig;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#141212]/98 backdrop-blur-xl px-8 py-10 transition-opacity duration-300 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <BrandLogo imgClassName="h-10 w-auto" />

        <button
          onClick={onClose}
          className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex flex-col items-center justify-center space-y-7 my-auto">
        {navigation.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="text-xl uppercase tracking-[0.25em] text-white/90 hover:text-white transition-colors duration-200"
            style={{ fontFamily: themeConfig.fonts.subHeading }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex flex-col items-center space-y-6 pt-6 border-t border-white/10">
        <Button
          href={navigation.cta.href}
          onClick={onClose}
          variant="primary"
          className="w-full max-w-xs"
        >
          {navigation.cta.label}
        </Button>
        <p
          className="text-xs uppercase tracking-[0.2em] text-white/40 text-center"
          style={{ fontFamily: themeConfig.fonts.body }}
        >
          {brand.fullName} • {brand.tagline}
        </p>
      </div>
    </div>
  );
}
