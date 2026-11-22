import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

  // 6 repeated sets for truly infinite, uninterrupted gliding
  const REPEAT_COUNT = 6;
  const allCards = Array(REPEAT_COUNT).fill(cards).flat();
  const allImages = Array(REPEAT_COUNT).fill(CARD_IMAGES).flat();

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCenteredIndex, setActiveCenteredIndex] = useState(totalCards * 3);
  const [isHoveringCards, setIsHoveringCards] = useState(false);
  const [cardWidth, setCardWidth] = useState(580);
  const gap = 28;

  const trackRef = useRef(null);
  const containerRef = useRef(null);

  // Physics animation refs
  const currentXRef = useRef(0);
  const targetXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartTargetXRef = useRef(0);
  const rafIdRef = useRef(null);
  const containerWidthRef = useRef(typeof window !== "undefined" ? window.innerWidth : 1200);

  // Calculate cardWidth responsively
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      containerWidthRef.current = w;
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

  const cardStep = cardWidth + gap;
  const loopWidth = totalCards * cardStep;

  // Initialize position in middle set (Set 2)
  useEffect(() => {
    const initialPos = -loopWidth * 2;
    currentXRef.current = initialPos;
    targetXRef.current = initialPos;
  }, [cardStep, loopWidth]);

  // Butter-smooth 60/120fps RAF lerp animation loop
  useEffect(() => {
    let lastActiveCard = -1;

    const render = () => {
      if (!trackRef.current) {
        rafIdRef.current = requestAnimationFrame(render);
        return;
      }

      // Smooth organic lerp damping: 0.048 gives that majestic, slow, serene luxury glide
      if (!isDraggingRef.current) {
        currentXRef.current += (targetXRef.current - currentXRef.current) * 0.048;
      }

      // Seamless infinite looping wrap: when gliding past threshold, shift by exact loopWidth * 2
      if (targetXRef.current < -loopWidth * 4) {
        targetXRef.current += loopWidth * 2;
        currentXRef.current += loopWidth * 2;
      } else if (targetXRef.current > -loopWidth * 1.5) {
        targetXRef.current -= loopWidth * 2;
        currentXRef.current -= loopWidth * 2;
      }

      // Dead center screen offset
      const centerOffset = (containerWidthRef.current - cardWidth) / 2;
      const finalTranslateX = centerOffset + currentXRef.current;

      trackRef.current.style.transform = `translate3d(${finalTranslateX.toFixed(2)}px, 0, 0)`;

      // Determine currently centered card
      const centeredIdx = Math.round(-currentXRef.current / cardStep);
      const normalized = ((-currentXRef.current % loopWidth) + loopWidth) % loopWidth;
      const currentCard = Math.round(normalized / cardStep) % totalCards;

      if (currentCard !== lastActiveCard) {
        lastActiveCard = currentCard;
        setActiveIndex(currentCard);
        setActiveCenteredIndex(centeredIdx);
      }

      rafIdRef.current = requestAnimationFrame(render);
    };

    rafIdRef.current = requestAnimationFrame(render);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [cardStep, loopWidth, cardWidth, totalCards]);

  // Auto-scroll every 3 seconds: runs continuously; pauses ONLY when mouse hovers directly over the cards
  useEffect(() => {
    if (isHoveringCards) return;

    const timer = setInterval(() => {
      if (!isDraggingRef.current) {
        targetXRef.current -= cardStep;
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [isHoveringCards, cardStep]);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    targetXRef.current += cardStep;
  }, [cardStep]);

  const handleNext = useCallback(() => {
    targetXRef.current -= cardStep;
  }, [cardStep]);

  const handleDotClick = useCallback(
    (targetDot) => {
      const normalized = ((-targetXRef.current % loopWidth) + loopWidth) % loopWidth;
      const currentActive = Math.round(normalized / cardStep) % totalCards;
      let diff = targetDot - currentActive;
      if (diff > totalCards / 2) diff -= totalCards;
      if (diff < -totalCards / 2) diff += totalCards;
      targetXRef.current -= diff * cardStep;
    },
    [cardStep, loopWidth, totalCards]
  );

  // Pointer drag gestures
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartTargetXRef.current = targetXRef.current;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback
    }
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - dragStartXRef.current;
    targetXRef.current = dragStartTargetXRef.current + delta;
    currentXRef.current = dragStartTargetXRef.current + delta;
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Fallback
    }
    isDraggingRef.current = false;
    // Snap cleanly to nearest card
    targetXRef.current = Math.round(targetXRef.current / cardStep) * cardStep;
  };

  return (
    <section
      id="highlights"
      ref={containerRef}
      className="relative w-full py-24 sm:py-28 bg-white overflow-hidden select-none"
    >
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

      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 lg:w-48 z-30 pointer-events-none bg-gradient-to-r from-white via-white/40 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 lg:w-48 z-30 pointer-events-none bg-gradient-to-l from-white via-white/40 to-transparent" />

      {/* Slider Carousel & 100px Margin Rounded Arrow Buttons (Desktop/System View Only) */}
      <div className="relative w-full">
        <button
          onClick={handlePrev}
          aria-label="Previous highlight"
          className="hidden md:flex absolute left-6 lg:left-[100px] top-1/2 -translate-y-1/2 z-40 w-12 h-12 lg:w-13 lg:h-13 rounded-full border border-[#141212] bg-white/85 hover:bg-[#141212] text-[#141212] hover:text-white items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer group backdrop-blur-sm"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" strokeWidth={1.8} />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next highlight"
          className="hidden md:flex absolute right-6 lg:right-[100px] top-1/2 -translate-y-1/2 z-40 w-12 h-12 lg:w-13 lg:h-13 rounded-full border border-[#141212] bg-white/85 hover:bg-[#141212] text-[#141212] hover:text-white items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer group backdrop-blur-sm"
        >
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.8} />
        </button>

        {/* Carousel Track: Auto-scroll pauses ONLY when hovering directly on cards */}
        <div
          onMouseEnter={() => setIsHoveringCards(true)}
          onMouseLeave={() => {
            setIsHoveringCards(false);
            if (isDraggingRef.current) {
              isDraggingRef.current = false;
              targetXRef.current = Math.round(targetXRef.current / cardStep) * cardStep;
            }
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative w-full overflow-visible py-4 touch-pan-y cursor-grab active:cursor-grabbing"
        >
          <div
            ref={trackRef}
            className="flex items-center"
            style={{
              gap: `${gap}px`,
              willChange: "transform",
            }}
          >
            {allCards.map((card, idx) => {
              const isCardActive = idx === activeCenteredIndex;

              return (
                <HighlightCard
                  key={`${card.id}-${idx}`}
                  card={card}
                  image={allImages[idx]}
                  isActive={isCardActive}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mt-12 flex justify-center items-center space-x-2.5 z-30 relative">
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#141212] cursor-pointer ${
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
