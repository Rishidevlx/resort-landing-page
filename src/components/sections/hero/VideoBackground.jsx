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
      {/* Balanced luxury gradient overlay for crisp video visibility and elegant text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#141212]/75 pointer-events-none" />
    </div>
  );
}
