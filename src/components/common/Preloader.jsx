import React, { useState, useEffect } from "react";
import { themeConfig } from "../../config/themeConfig";

export default function Preloader() {
  const { brand, fonts } = themeConfig;
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Prevent scrolling during preloader display without touching body overflow
    const preventScroll = (e) => {
      e.preventDefault();
    };

    const preventKeyScroll = (e) => {
      if (
        ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(
          e.key
        )
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventKeyScroll);

    // Display for 1.5s, then initiate GPU opacity fade-out
    const timer = setTimeout(() => {
      setIsExiting(true);

      // Restore user scroll interaction immediately when fade begins
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeyScroll);

      // Completely unmount after 800ms fade completes
      const unmountTimer = setTimeout(() => {
        setIsDone(true);
      }, 800);

      return () => clearTimeout(unmountTimer);
    }, 1500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeyScroll);
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0C0B0B] text-white select-none transition-opacity duration-800 ease-out ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ willChange: "opacity" }}
    >
      <div
        className={`flex flex-col items-center text-center px-6 transition-all duration-700 ease-out ${
          isExiting ? "scale-98 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Brand Logo */}
        <div className="relative mb-6">
          <img
            src="/resort-logo.png"
            alt={brand.fullName}
            className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_10px_25px_rgba(255,255,255,0.08)]"
            loading="eager"
          />
        </div>

        {/* Brand Name */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl text-white font-normal uppercase tracking-[0.35em] leading-tight"
          style={{ fontFamily: fonts.heading }}
        >
          {brand.name} {brand.subName}
        </h2>

        {/* Subtitle / Tagline */}
        <p
          className="mt-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.45em] text-white/50 font-medium"
          style={{ fontFamily: fonts.subHeading }}
        >
          {brand.tagline || "RESORT & RETREAT"}
        </p>
      </div>
    </div>
  );
}
