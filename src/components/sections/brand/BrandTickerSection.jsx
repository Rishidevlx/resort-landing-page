import React from "react";
import ScrollVelocity from "../../common/ScrollVelocity/ScrollVelocity";
import { themeConfig } from "../../../config/themeConfig";

export default function BrandTickerSection() {
  const { colors } = themeConfig;

  const texts = [
    "RIHA PALACE • TIMELESS SANCTUARY • BESPOKE LUXURY • UNTOUCHED NATURE",
    "RESERVE YOUR RETREAT • 24/7 PRIVATE CONCIERGE • CONNECT WITH US",
  ];

  return (
    <section
      className="w-full py-16 sm:py-24 border-t border-white/10 overflow-hidden select-none"
      style={{ backgroundColor: colors.primaryBg }}
    >
      <ScrollVelocity
        texts={texts}
        velocity={65}
        skewWithVelocity={12}
        scaleWithVelocity={0.06}
        outlineAlternate={true}
        draggable={true}
        gap={32}
        fadeEdges={true}
        color="#FFFFFF"
      />
    </section>
  );
}
