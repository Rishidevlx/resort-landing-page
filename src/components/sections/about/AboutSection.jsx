import React, { useState } from "react";
import ScrollExpand from "../../common/ScrollExpand/ScrollExpand";
import Button from "../../common/Button";
import AnimatedCounter from "../../common/AnimatedCounter";
import { themeConfig } from "../../../config/themeConfig";
import aboutImg from "../../../assets/bg-images/about-sections.png";

export default function AboutSection() {
  const { about, fonts, colors } = themeConfig;
  const [isFullyExpanded, setIsFullyExpanded] = useState(false);

  return (
    <section id="about" className="relative w-full" style={{ backgroundColor: colors.primaryBg }}>
      <ScrollExpand
        src={aboutImg}
        alt="Riha Palace Sanctuary"
        title={about.expandTitle}
        scrollHint={about.scrollHint}
        useWindowScroll={true}
        startWidth={46}
        startHeight={58}
        startRadius={24}
        endRadius={0}
        mediaZoom={1.25}
        scrollDistance={1.3}
        holdDistance={0.4}
        overlayScrim={0.88}
        onProgress={(p) => {
          setIsFullyExpanded(p >= 0.98);
        }}
        titleStyle={{
          fontFamily: fonts.heading,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
        hintStyle={{
          fontFamily: fonts.subHeading,
        }}
      >
<div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-3 sm:px-6 py-2 sm:py-6 select-none">
<div className="inline-flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-4">
            <span className="w-5 sm:w-8 h-[1px] bg-white/50" />
            <span
              className="text-[9px] sm:text-[13px] tracking-[0.3em] text-white/95 uppercase font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
              style={{ fontFamily: fonts.subHeading }}
            >
              {about.badge}
            </span>
            <span className="w-5 sm:w-8 h-[1px] bg-white/50" />
          </div>
<h2
            className="text-xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal uppercase leading-[1.1] tracking-[0.03em] max-w-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: fonts.heading }}
          >
            {about.heading}
          </h2>
<p
            className="mt-2 sm:mt-5 text-[11px] sm:text-base md:text-lg text-[#E9E9E9] max-w-2xl leading-relaxed font-normal line-clamp-3 sm:line-clamp-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
            style={{ fontFamily: fonts.body }}
          >
            {about.description}
          </p>
<div className="mt-3.5 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-8 w-full max-w-2xl py-2.5 sm:py-5 border-y border-white/20">
            {about.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span
                  className="text-xl sm:text-3xl md:text-4xl text-white font-normal tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                  style={{ fontFamily: fonts.heading }}
                >
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    trigger={isFullyExpanded}
                    duration={1600}
                  />
                </span>
                <span
                  className="mt-1 text-[9px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/75 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] text-center"
                  style={{ fontFamily: fonts.subHeading }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
<div className="mt-3.5 sm:mt-8">
            <Button
              href="#amenities"
              variant="primary"
              className="px-5 py-2 sm:px-7 sm:py-3 text-[11px] sm:text-[13px]"
            >
              {about.cta}
            </Button>
          </div>
        </div>
      </ScrollExpand>
    </section>
  );
}
