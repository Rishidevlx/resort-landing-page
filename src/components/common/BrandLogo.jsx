import React from "react";
import { themeConfig } from "../../config/themeConfig";

export default function BrandLogo({
  className = "",
  imgClassName = "h-14 sm:h-16 w-auto object-contain",
  hoverEffect = true,
}) {
  const { brand } = themeConfig;

  return (
    <a
      href="#"
      className={`inline-flex items-center select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded px-1 ${className}`}
      aria-label={`${brand.fullName} Home`}
    >
      <img
        src="/resort-logo.png"
        alt={brand.fullName}
        className={`${imgClassName} ${
          hoverEffect ? "transition-transform duration-300 group-hover:scale-105" : ""
        }`}
        loading="eager"
      />
    </a>
  );
}
