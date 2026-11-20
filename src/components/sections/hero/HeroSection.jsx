import React, { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { themeConfig } from "../../../config/themeConfig";
import VideoBackground from "./VideoBackground";

export default function HeroSection() {
  const { hero, colors, fonts } = themeConfig;
  const heroRef = useRef(null);

  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  useEffect(() => {
    const updateMotion = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.14;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.14;

      setOffset({
        x: currentRef.current.x,
        y: currentRef.current.y,
      });

      rafRef.current = requestAnimationFrame(updateMotion);
    };

    rafRef.current = requestAnimationFrame(updateMotion);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);

    const maxDistanceX = 46;
    const maxDistanceY = 32;

    targetRef.current = {
      x: -normX * maxDistanceX,
      y: -normY * maxDistanceY,
    };
  };

  const handleMouseLeave = () => {
    targetRef.current = { x: 0, y: 0 };
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 select-none overflow-hidden [perspective:1000px]"
      style={{ backgroundColor: colors.primaryBg }}
    >
      <VideoBackground />

      <div
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center pt-20 sm:pt-24 pb-12"
        style={{
          transform: `translate3d(${offset.x.toFixed(2)}px, ${offset.y.toFixed(2)}px, 0px) rotateX(${(-offset.y * 0.1).toFixed(2)}deg) rotateY(${(offset.x * 0.1).toFixed(2)}deg)`,
          willChange: "transform",
        }}
      >
        <div className="inline-flex items-center space-x-3 mb-6 sm:mb-8">
          <span className="w-6 sm:w-10 h-[1px] bg-white/40" />
          <span
            className="text-[11px] sm:text-[13px] tracking-[0.35em] text-white/90 uppercase font-medium"
            style={{ fontFamily: fonts.subHeading }}
          >
            {hero.welcomeBadge}
          </span>
          <span className="w-6 sm:w-10 h-[1px] bg-white/40" />
        </div>

        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px] font-normal text-white uppercase leading-[0.98] tracking-[0.02em] max-w-4xl"
          style={{ fontFamily: fonts.heading }}
        >
          {hero.headlineLines.map((line, idx) => (
            <span key={idx} className="block">
              {line}
            </span>
          ))}
        </h1>

        <div className="mt-8 sm:mt-10 flex flex-col items-center">
          <p
            className="text-sm sm:text-base md:text-lg tracking-[0.38em] uppercase text-white/90 font-medium"
            style={{ fontFamily: fonts.subHeading }}
          >
            {hero.subHeadline}
          </p>
          <p
            className="mt-2 text-xs sm:text-[13px] tracking-[0.25em] text-white/60 uppercase"
            style={{ fontFamily: fonts.body }}
          >
            {hero.tagline}
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/50 hover:text-white transition-colors duration-300">
        <a
          href="#about"
          aria-label="Scroll down to About Section"
          className="flex flex-col items-center group cursor-pointer focus:outline-none focus:ring-1 focus:ring-white rounded p-1"
        >
          <span
            className="text-[10px] uppercase tracking-[0.3em] mb-1 opacity-70 group-hover:opacity-100 transition-opacity"
            style={{ fontFamily: fonts.subHeading }}
          >
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-white/70 group-hover:text-white" />
        </a>
      </div>
    </section>
  );
}
