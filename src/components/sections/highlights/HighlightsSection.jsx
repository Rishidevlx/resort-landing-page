import React, { useState, useEffect, useRef } from "react";
import { themeConfig } from "../../../config/themeConfig";
import HighlightCard from "./HighlightCard";

import img1 from "../../../assets/bg-images/about-sections.png";
import img2 from "../../../assets/bg-images/about-sections2.png";
import img3 from "../../../assets/bg-images/about-sections3.png";
import img4 from "../../../assets/bg-images/about-sections.png";

const CARD_IMAGES = [img1, img2, img3, img4];

export default function HighlightsSection() {
  const { highlights, fonts } = themeConfig;
  const cards = highlights.cards;
  const totalCards = cards.length;

  // Tripled cards for smooth infinite wrapping
  const allCards = [...cards, ...cards, ...cards];
  const allImages = [...CARD_IMAGES, ...CARD_IMAGES, ...CARD_IMAGES];

  // Middle set start (index 4)
  const [virtualIndex, setVirtualIndex] = useState(totalCards);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Dragging state
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const containerRef = useRef(null);

  // Compact card width matching Caladan layout
  const [cardWidth, setCardWidth] = useState(580);
  const gap = 28;

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setCardWidth(Math.min(w * 0.82, 340));
      } else if (w < 768) {
        setCardWidth(480);
      } else if (w < 1024) {
        setCardWidth(540);
      } else {
        setCardWidth(580);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2s Autoplay infinite loop
  useEffect(() => {
    if (isPaused || isDragging) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setVirtualIndex((prev) => prev + 1);
    }, highlights.autoplayInterval || 2000);

    return () => clearInterval(timer);
  }, [isPaused, isDragging, highlights.autoplayInterval]);

  // Seamless infinite wrap
  const handleTransitionEnd = () => {
    if (virtualIndex >= totalCards * 2) {
      setIsTransitioning(false);
      setVirtualIndex(virtualIndex - totalCards);
    } else if (virtualIndex < totalCards) {
      setIsTransitioning(false);
      setVirtualIndex(virtualIndex + totalCards);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const id = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [isTransitioning]);

  // Pointer Drag Handlers
  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    setDragOffset(0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    setDragOffset(delta);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    const threshold = 45;

    if (dragOffset < -threshold) {
      setIsTransitioning(true);
      setVirtualIndex((prev) => prev + 1);
    } else if (dragOffset > threshold) {
      setIsTransitioning(true);
      setVirtualIndex((prev) => prev - 1);
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  const activeIndex = virtualIndex % totalCards;

  return (
    <section
      id="highlights"
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        if (isDragging) {
          setIsDragging(false);
          setDragOffset(0);
        }
      }}
      className="relative w-full py-24 sm:py-28 bg-white overflow-hidden select-none cursor-grab active:cursor-grabbing"
    >
      {/* Header Container matching About section font styling */}
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="inline-flex items-center space-x-3 mb-4">
          <span className="w-8 h-[1px] bg-[#141212]/30" />
          <span
            className="text-[11px] sm:text-[13px] tracking-[0.35em] text-[#141212]/80 uppercase font-medium"
            style={{ fontFamily: fonts.subHeading }}
          >
            {highlights.badge}
          </span>
          <span className="w-8 h-[1px] bg-[#141212]/30" />
        </div>

        <h2
          className="text-3xl sm:text-5xl md:text-6xl text-[#141212] font-normal uppercase leading-[1.08] tracking-[0.03em] max-w-3xl"
          style={{ fontFamily: fonts.heading }}
        >
          {highlights.heading}
        </h2>

        <p
          className="mt-3 text-xs sm:text-sm tracking-[0.22em] text-[#141212]/60 uppercase font-medium"
          style={{ fontFamily: fonts.subHeading }}
        >
          {highlights.subHeading}
        </p>
      </div>

      {/* Subtle edge fades (cards stay clearly recognizable) */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 lg:w-48 z-30 pointer-events-none bg-gradient-to-r from-white via-white/40 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 lg:w-48 z-30 pointer-events-none bg-gradient-to-l from-white via-white/40 to-transparent" />

      {/* Carousel Track */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full overflow-visible py-4 touch-pan-y"
      >
        <div
          onTransitionEnd={handleTransitionEnd}
          className="flex items-center"
          style={{
            transform: `translateX(calc(50% - ${(virtualIndex + 0.5) * cardWidth + virtualIndex * gap}px + ${dragOffset}px))`,
            transition: isDragging
              ? "none"
              : isTransitioning
              ? "transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)"
              : "none",
            gap: `${gap}px`,
            willChange: "transform",
          }}
        >
          {allCards.map((card, idx) => (
            <HighlightCard
              key={`${card.id}-${idx}`}
              card={card}
              image={allImages[idx]}
              isActive={idx === virtualIndex}
            />
          ))}
        </div>
      </div>

      {/* Bottom Luxury Slide Dots Indicator */}
      <div className="mt-10 sm:mt-12 flex justify-center items-center space-x-2.5 z-30 relative">
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsTransitioning(true);
              setVirtualIndex(totalCards + idx);
            }}
            className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#141212] ${
              activeIndex === idx
                ? "w-8 h-1.5 bg-[#141212]"
                : "w-1.5 h-1.5 bg-[#141212]/20 hover:bg-[#141212]/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
