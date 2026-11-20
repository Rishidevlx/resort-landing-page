import React from "react";
import mapImage from "../../../assets/Riha-palace-map.png";

export default function MapSection() {
  return (
    <section
      id="sanctuary-map"
      className="relative w-full h-[65vh] sm:h-[80vh] lg:h-screen min-h-[460px] bg-black overflow-hidden select-none flex items-center justify-center"
      aria-label="Riha Palace Sanctuary Map"
    >
      {/* Soft feather transition from the white Contact Form into the black map canvas */}
      <div
        className="absolute top-0 left-0 right-0 h-16 sm:h-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.4) 30%, rgba(0,0,0,0.6) 75%, transparent 100%)",
        }}
      />

      {/* Map Image:
          - Responsive: object-contain on mobile (so all islands & text are 100% visible), object-cover on md/lg for full-bleed immersive widescreen.
          - Draggable disabled: strictly non-draggable across all desktop & mobile browsers.
      */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src={mapImage}
          alt="Riha Palace Sanctuary Island Map"
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
          loading="lazy"
          className="w-full h-full object-contain md:object-cover object-center pointer-events-none select-none"
          style={{
            userSelect: "none",
            WebkitUserDrag: "none",
            WebkitTouchCallout: "none",
          }}
        />
      </div>

      {/* Bottom ambient vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
        }}
      />
    </section>
  );
}
