import React from "react";
import heroVideo from "../../../assets/videos/Hero-sections-bg.mp4";

export default function VideoBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover object-center scale-[1.01]"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support video playback.
      </video>

      {/* Subtle overlays for video clarity and text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-[#141212]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05)_0%,rgba(20,18,18,0.5)_100%)]" />
    </div>
  );
}
