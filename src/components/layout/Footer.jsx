import React, { useState } from "react";
import { ArrowUp, MapPin } from "lucide-react";
import { themeConfig } from "../../config/themeConfig";
import BrandLogo from "../common/BrandLogo";
import CurvedInput from "../common/CurvedInput/CurvedInput";
import footerBg from "../../assets/Footer-bg.png";
function WhatsAppIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const { fonts } = themeConfig;
  const [subscribed, setSubscribed] = useState(false);

  const leftNavLinks = [
    { label: "HIGHLIGHTS", href: "#highlights" },
    { label: "AMENITIES", href: "#amenities" },
    { label: "GALLERY", href: "#gallery" },
    { label: "SANCTUARY", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  const rightExperiences = [
    { label: "OVERWATER VILLAS", href: "#highlights" },
    { label: "AYURVEDIC SPA", href: "#amenities" },
    { label: "OCEAN GASTRONOMY", href: "#amenities" },
    { label: "PRIVATE CHARTERS", href: "#amenities" },
    { label: "CONCIERGE DESK", href: "#contact" },
  ];

  const handleSubscribe = (email) => {
    if (!email || !email.includes("@")) {
      return;
    }
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative w-full bg-[#080808] text-[#E9E9E9] border-t border-white/10 select-none overflow-hidden"
      style={{ fontFamily: fonts.body }}
    >
<div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none opacity-80"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
<div className="relative pt-26 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 overflow-hidden">
<div className="hidden lg:flex absolute inset-0 w-full h-full pointer-events-none justify-center">
          <svg
            viewBox="0 0 1200 520"
            preserveAspectRatio="none"
            className="w-full max-w-[1360px] h-full opacity-60"
          >
<line
              x1="600"
              y1="0"
              x2="600"
              y2="84"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeOpacity="0.85"
              strokeLinecap="butt"
            />
<path
              d="M 230 520 A 370 435 0 0 1 970 520"
              fill="none"
              stroke="url(#footerWhiteArchGradient)"
              strokeWidth="1.2"
            />

            <defs>
              <linearGradient id="footerWhiteArchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
                <stop offset="20%" stopColor="#ffffff" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="80%" stopColor="#ffffff" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </div>
<div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
<div className="lg:col-span-3 order-2 lg:order-1 text-center lg:text-left">
              <ul className="space-y-4 sm:space-y-5">
                {leftNavLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs sm:text-[13px] uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors duration-200 font-medium block"
                      style={{ fontFamily: fonts.subHeading }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
<div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center text-center space-y-6 pt-2 sm:pt-4">
<div className="flex flex-col items-center">
                <BrandLogo
                  imgClassName="h-24 sm:h-28 w-auto object-contain drop-shadow-md"
                  hoverEffect={false}
                />
              </div>
<p
                className="text-xs sm:text-sm uppercase tracking-[0.22em] text-white/75 font-medium max-w-md"
                style={{ fontFamily: fonts.subHeading }}
              >
                SIGN UP FOR ALL THE LATEST NEWS AND OFFERS
              </p>
<div className="w-full max-w-[460px] mx-auto px-2">
                {subscribed ? (
                  <div className="py-3 px-6 rounded-xl bg-white/5 border border-white/40 text-white text-xs tracking-[0.2em] uppercase animate-fade-in">
                    ✓ Thank you. You are now subscribed to our sanctuary dispatches.
                  </div>
                ) : (
                  <CurvedInput
                    placeholder="Enter your email"
                    buttonText="SUBSCRIBE"
                    type="email"
                    theme="dark"
                    bend={24}
                    height={58}
                    width="100%"
                    fontSize={14}
                    backgroundColor="#141212"
                    borderColor="rgba(255, 255, 255, 0.22)"
                    buttonColor="#FFFFFF"
                    buttonTextColor="#141212"
                    textColor="#FFFFFF"
                    placeholderColor="rgba(255, 255, 255, 0.4)"
                    onSubmit={handleSubscribe}
                  />
                )}
              </div>
            </div>
<div className="lg:col-span-3 order-3 text-center lg:text-right">
              <ul className="space-y-4 sm:space-y-5">
                {rightExperiences.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs sm:text-[13px] uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors duration-200 font-medium block"
                      style={{ fontFamily: fonts.subHeading }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
<div className="relative z-10 w-[70%] max-w-5xl mx-auto h-[1px] bg-white/15" />
<div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-9 sm:py-10 flex flex-col md:flex-row items-center justify-between text-xs text-white/45 tracking-[0.15em] space-y-4 md:space-y-0">
        <div className="flex flex-col sm:flex-row items-center space-y-1.5 sm:space-y-0 sm:space-x-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Riha Palace Resort & Retreat, All Rights Reserved.</p>
          <span className="hidden sm:inline text-white/20">•</span>
          <p>
            Designed and Developed by{" "}
            <a
              href="https://www.linkedin.com/in/poosha-balakrishnan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white underline underline-offset-4 transition-colors font-medium inline-block"
            >
              @meow
            </a>
          </p>
        </div>
<div className="flex items-center space-x-6 sm:space-x-8">
          <div className="flex items-center space-x-3 text-white/60">
<a
              href="https://wa.me/9607991234"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Concierge"
              className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:text-white hover:border-white transition-colors cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </a>
<a
              href="#instagram"
              onClick={(e) => e.preventDefault()}
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:text-white hover:border-white transition-colors cursor-pointer"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
<a
              href="#contact"
              aria-label="Sanctuary Location"
              className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:text-white hover:border-white transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-white/70 hover:text-white" />
            </a>
<a
              href="#linkedin"
              onClick={(e) => e.preventDefault()}
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:text-white hover:border-white transition-colors cursor-pointer"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors uppercase text-[11px] tracking-[0.2em] cursor-pointer"
            style={{ fontFamily: fonts.subHeading }}
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
