import React from "react";
import { themeConfig } from "../../../config/themeConfig";

export default function HighlightCard({ card, image, isActive }) {
  const { fonts } = themeConfig;

  return (
    <div
      className={`relative w-[82vw] sm:w-[480px] md:w-[540px] lg:w-[580px] h-[330px] sm:h-[365px] md:h-[390px] shrink-0 rounded-3xl overflow-hidden select-none transition-all duration-700 ease-out ${
        isActive
          ? "scale-100 opacity-100 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] z-10"
          : "scale-[0.9] opacity-75 blur-[2.5px]"
      }`}
    >
<img
        src={image}
        alt={card.title}
        draggable={false}
        className="w-full h-full object-cover object-center transform transition-transform duration-1000 scale-[1.03]"
      />
<div className="absolute top-5 left-5 z-10">
        <span
          className="inline-block px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white text-[10px] tracking-[0.25em] font-medium uppercase"
          style={{ fontFamily: fonts.subHeading }}
        >
          {card.tag}
        </span>
      </div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
<div
        className={`absolute inset-0 bg-white/15 transition-opacity duration-700 pointer-events-none z-20 ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      />
<div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 flex flex-col items-start text-left">
        <h3
          className="text-2xl sm:text-3xl md:text-[32px] text-white font-normal uppercase tracking-[0.03em] drop-shadow-md leading-tight"
          style={{ fontFamily: fonts.heading }}
        >
          {card.title}
        </h3>
<p
          className="mt-2.5 text-xs sm:text-[13px] text-white/90 font-normal leading-relaxed max-w-lg line-clamp-2 drop-shadow"
          style={{ fontFamily: fonts.body }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}
