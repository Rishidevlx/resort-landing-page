import React from "react";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/hero/HeroSection";
import AboutSection from "./components/sections/about/AboutSection";
import HighlightsSection from "./components/sections/highlights/HighlightsSection";
import AmenitiesSection from "./components/sections/amenities/AmenitiesSection";
import GallerySection from "./components/sections/gallery/GallerySection";
import GallerySection2 from "./components/sections/gallery/GallerySection2";
import BrandTickerSection from "./components/sections/brand/BrandTickerSection";
import ContactFormSection from "./components/sections/contact/ContactFormSection";
import Footer from "./components/layout/Footer";
import { themeConfig } from "./config/themeConfig";

export default function App() {
  const { colors, fonts } = themeConfig;

  return (
    <div
      className="min-h-screen text-[#E9E9E9] selection:bg-white selection:text-[#141212]"
      style={{
        backgroundColor: colors.primaryBg,
        fontFamily: fonts.body,
      }}
    >
      <Navbar />

      <main>
        {/* Fullscreen Video Hero Section */}
        <HeroSection />

        {/* About Section with ScrollExpand Animation */}
        <AboutSection />

        {/* Highlights Section (White background with 4-card drag & autoplay carousel) */}
        <HighlightsSection />

        {/* Amenities Section (Primary dark bg with React Bits ScrollStack) */}
        <AmenitiesSection />

        {/* Gallery Section with React Bits CircularGallery WebGL2 Carousel */}
        <GallerySection />

        {/* Gallery Section 2 with React Bits DriftWall 3D Perspective */}
        <GallerySection2 />

        {/* Scroll Velocity Brand Streamer after Gallery 2 */}
        <BrandTickerSection />

        {/* Minimalist White Canvas Contact Form with Smoky Transition */}
        <ContactFormSection />
      </main>

      {/* Black Minimalist Footer */}
      <Footer />
    </div>
  );
}
