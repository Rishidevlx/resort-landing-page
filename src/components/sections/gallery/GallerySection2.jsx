import React from "react";
import DriftWall from "../../common/DriftWall/DriftWall";
import { themeConfig } from "../../../config/themeConfig";

import roomImg from "../../../assets/gallery/Room.jpg";
import diningImg from "../../../assets/gallery/dining.jpg";
import poolImg from "../../../assets/gallery/swimming-pool.jpg";
import viewImg from "../../../assets/gallery/view.jpg";
import atollImg from "../../../assets/bg-images/about-sections.png";
import spaImg from "../../../assets/bg-images/about-sections2.png";
import oceanImg from "../../../assets/bg-images/about-sections3.png";

export default function GallerySection2() {
  const { fonts, colors } = themeConfig;

  const driftItems = [
    { image: roomImg, title: "Lagoon Presidential Villa" },
    { image: diningImg, title: "Seaside Gastronomy" },
    { image: poolImg, title: "Infinity Horizon Pool" },
    { image: viewImg, title: "Golden Sunset Vista" },
    { image: atollImg, title: "Pristine Atoll Reserve" },
    { image: spaImg, title: "Aura Ayurvedic Haven" },
    { image: oceanImg, title: "Private Marine Safari" },
    { image: roomImg, title: "Overwater Coral Suite" },
    { image: diningImg, title: "Michelin Starlit Tasting" },
    { image: poolImg, title: "Cascading Vitality Pool" },
    { image: viewImg, title: "Panoramic Sandbank View" },
    { image: atollImg, title: "Untouched Coral Reef" },
    { image: spaImg, title: "Botanical Herbal Sanctuary" },
    { image: oceanImg, title: "Sunset Catamaran Cruise" },
    { image: roomImg, title: "Azure Lagoon Pavilion" },
  ];

  return (
    <section
      id="gallery-2"
      className="relative w-full py-24 sm:py-32 selection:bg-white selection:text-[#141212] overflow-hidden"
      style={{ backgroundColor: colors.primaryBg }}
    >
      {/* Section Header */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center space-x-3 mb-3 justify-center">
          <span className="w-8 h-[1px] bg-white/40" />
          <span
            className="text-[11px] sm:text-[13px] tracking-[0.35em] text-white/90 uppercase font-medium"
            style={{ fontFamily: fonts.subHeading }}
          >
            DRIFT ARCHIVE
          </span>
          <span className="w-8 h-[1px] bg-white/40" />
        </div>

        <h2
          className="text-3xl sm:text-5xl md:text-6xl text-white font-normal uppercase leading-[1.05] tracking-[0.04em]"
          style={{ fontFamily: fonts.heading }}
        >
          MOMENTS IN MOTION
        </h2>

        <p
          className="mt-3 text-[11px] sm:text-xs tracking-[0.2em] text-[#E9E9E9]/70 uppercase max-w-xl mx-auto"
          style={{ fontFamily: fonts.subHeading }}
        >
          AN ENDLESS 3D PERSPECTIVE OF SANCTUARY LIFE
        </p>
      </div>

      {/* React Bits Drift Wall 3D Perspective Canvas */}
      <div className="relative w-full h-[580px] sm:h-[660px] lg:h-[720px]">
        <DriftWall
          items={driftItems}
          columns={5}
          tileWidth={220}
          tileHeight={145}
          gap={18}
          radius={14}
          tilt={15}
          turn={-12}
          perspective={1200}
          depth={120}
          speed={38}
          direction="up"
          variance={0.45}
          parallax={0.65}
          lift={64}
          fade={0.6}
          dim={0.55}
          overlayColor="#141212"
          xOffset={-60}
        />
      </div>
    </section>
  );
}
