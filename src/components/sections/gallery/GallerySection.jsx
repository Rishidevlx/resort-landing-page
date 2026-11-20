import React, { useEffect, useRef, useState } from "react";
import CircularGallery from "../../common/CircularGallery/CircularGallery";
import { themeConfig } from "../../../config/themeConfig";

import roomImg from "../../../assets/gallery/Room.jpg";
import diningImg from "../../../assets/gallery/dining.jpg";
import poolImg from "../../../assets/gallery/swimming-pool.jpg";
import viewImg from "../../../assets/gallery/view.jpg";
import atollImg from "../../../assets/bg-images/about-sections.png";
import spaImg from "../../../assets/bg-images/about-sections2.png";
import oceanImg from "../../../assets/bg-images/about-sections3.png";

export default function GallerySection() {
  const { gallery, fonts, colors } = themeConfig;
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const galleryImages = [
    roomImg,   // 1. OCEAN VILLA
    diningImg, // 2. SEASIDE DINING
    poolImg,   // 3. INFINITY POOL
    viewImg,   // 4. CORAL VISTA
    atollImg,  // 5. ATOLL SANCTUARY
    spaImg,    // 6. WELLNESS SPA
    oceanImg,  // 7. YACHT CHARTER
    roomImg,   // 8. AZURE SUITE
    diningImg, // 9. STARLIT LOUNGE
    poolImg,   // 10. HORIZON DECK
    viewImg,   // 11. SUNSET COVE
    atollImg,  // 12. PRIVATE REEF
  ];

  const galleryItems = gallery.items.map((item, index) => ({
    image: galleryImages[index % galleryImages.length],
    // text: item.title, // Commented out as requested - titles hidden under cards
    description: item.description,
    alt: item.alt,
  }));

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const section = sectionRef.current;
          if (section) {
            const rect = section.getBoundingClientRect();
            const trackDistance = section.offsetHeight - window.innerHeight;
            if (trackDistance > 0) {
              const scrolled = -rect.top;
              const p = Math.min(1, Math.max(0, scrolled / trackDistance));
              setProgress(p);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative w-full h-[320vh] selection:bg-white selection:text-[#141212]"
      style={{ backgroundColor: colors.primaryBg }}
    >
      {/* Viewport Pinned Sticky Container */}
      <div className="sticky top-0 w-full h-screen flex flex-col justify-start pt-6 sm:pt-8 pb-4 overflow-hidden z-20">
        {/* Section Header */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 text-center shrink-0 mb-1 sm:mb-2">
          <div className="inline-flex items-center space-x-3 mb-2 justify-center">
            <span className="w-8 h-[1px] bg-white/40" />
            <span
              className="text-[11px] sm:text-[13px] tracking-[0.35em] text-white/90 uppercase font-medium"
              style={{ fontFamily: fonts.subHeading }}
            >
              {gallery.badge}
            </span>
            <span className="w-8 h-[1px] bg-white/40" />
          </div>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl text-white font-normal uppercase leading-[1.05] tracking-[0.04em]"
            style={{ fontFamily: fonts.heading }}
          >
            {gallery.heading}
          </h2>

          <p
            className="mt-2 text-[11px] sm:text-xs tracking-[0.2em] text-[#E9E9E9]/70 uppercase max-w-xl mx-auto"
            style={{ fontFamily: fonts.subHeading }}
          >
            {gallery.subHeading}
          </p>
        </div>

        {/* WebGL2 Circular Gallery Component occupying maximum space */}
        <div className="relative w-full flex-1 min-h-0">
          <CircularGallery
            items={galleryItems}
            externalProgress={progress}
            bend={3}
            textColor="#FFFFFF"
            borderRadius={0.06}
            scrollEase={0.06}
            scrollSpeed={1.8}
            itemSize={1.15}
            itemAspect={0.78}
            gap={0.3}
            wave={0.8}
            shadow={0.35}
            autoScroll={0}
            openOnClick={true}
            showTitles={false}
            font="500 16px 'Barlow', sans-serif"
          />
        </div>
      </div>
    </section>
  );
}
