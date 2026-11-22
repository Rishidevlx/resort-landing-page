import React from "react";
import Preloader from "./components/common/Preloader";
import CustomCursor from "./components/common/CustomCursor";
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
      <Preloader />
      <CustomCursor />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
        <AmenitiesSection />
        <GallerySection />
        <GallerySection2 />
        <BrandTickerSection />
        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
}
