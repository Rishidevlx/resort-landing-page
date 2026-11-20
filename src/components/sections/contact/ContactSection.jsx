import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import ScrollVelocity from "../../common/ScrollVelocity/ScrollVelocity";
import { themeConfig } from "../../../config/themeConfig";
import Button from "../../common/Button";

export default function ContactSection() {
  const { contact, fonts, colors } = themeConfig;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    suite: "Ocean Villa",
    dates: "",
    guests: "2 Guests",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative w-full selection:bg-white selection:text-[#141212] overflow-hidden"
      style={{ backgroundColor: colors.primaryBg }}
    >
      {/* 1. React Bits Scroll Velocity Running Streamer */}
      <div className="w-full pt-16 pb-12 sm:pt-24 sm:pb-20 border-b border-white/10 overflow-hidden opacity-90">
        <ScrollVelocity
          texts={contact.velocityTexts}
          velocity={70}
          skewWithVelocity={12}
          scaleWithVelocity={0.06}
          outlineAlternate={true}
          draggable={true}
          gap={32}
          fadeEdges={true}
          color="#FFFFFF"
        />
      </div>

      {/* 2. Main Contact & Private Concierge Body */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Sanctuary Concierge & Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start text-left">
            {/* Badge with Line Accents */}
            <div className="inline-flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-white/40" />
              <span
                className="text-[11px] sm:text-[13px] tracking-[0.35em] text-white/90 uppercase font-medium"
                style={{ fontFamily: fonts.subHeading }}
              >
                {contact.badge}
              </span>
              <span className="w-8 h-[1px] bg-white/40" />
            </div>

            {/* Grand Heading */}
            <h2
              className="text-4xl sm:text-6xl md:text-7xl text-white font-normal uppercase leading-[1.02] tracking-[0.04em]"
              style={{ fontFamily: fonts.heading }}
            >
              {contact.heading}
            </h2>

            {/* Description */}
            <p
              className="mt-6 text-sm sm:text-[15px] text-[#E9E9E9]/80 leading-relaxed font-normal max-w-lg"
              style={{ fontFamily: fonts.body }}
            >
              {contact.description}
            </p>

            {/* Concierge Contact Details Cards */}
            <div className="mt-10 sm:mt-12 space-y-6">
              {/* Direct Mail */}
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 transition-colors duration-300 hover:border-white/25">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4
                    className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium"
                    style={{ fontFamily: fonts.subHeading }}
                  >
                    Private Concierge Desk
                  </h4>
                  <a
                    href={`mailto:${contact.details.conciergeEmail}`}
                    className="text-sm sm:text-base text-white hover:underline transition-all block mt-1"
                  >
                    {contact.details.conciergeEmail}
                  </a>
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 transition-colors duration-300 hover:border-white/25">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4
                    className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium"
                    style={{ fontFamily: fonts.subHeading }}
                  >
                    Direct Lines & WhatsApp
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-1">
                    <a
                      href={`tel:${contact.details.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-sm sm:text-base text-white hover:underline transition-all"
                    >
                      {contact.details.phone}
                    </a>
                    <span className="hidden sm:inline text-white/30">•</span>
                    <a
                      href={`https://wa.me/${contact.details.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-emerald-400/90 hover:underline transition-all"
                    >
                      WhatsApp Concierge
                    </a>
                  </div>
                </div>
              </div>

              {/* Island Coordinates & 24/7 Service */}
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4
                    className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium"
                    style={{ fontFamily: fonts.subHeading }}
                  >
                    Sanctuary Location
                  </h4>
                  <p className="text-sm sm:text-[15px] text-white/90 mt-1">
                    {contact.details.address}
                  </p>
                  <div className="inline-flex items-center space-x-2 mt-2 text-xs text-white/50">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{contact.details.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bespoke Inquiry & Reservation Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#181616]/80 border border-white/10 p-8 sm:p-12 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-sm">
            <div className="mb-8 text-left">
              <h3
                className="text-2xl sm:text-3xl text-white font-normal uppercase tracking-[0.03em]"
                style={{ fontFamily: fonts.heading }}
              >
                REQUEST A BESPOKE RESERVATION
              </h3>
              <p
                className="mt-2 text-xs sm:text-sm text-[#E9E9E9]/70"
                style={{ fontFamily: fonts.body }}
              >
                Our reservations team will curate your personalized itinerary and provide availability within 2 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h4
                  className="text-2xl text-white font-normal uppercase tracking-wider"
                  style={{ fontFamily: fonts.heading }}
                >
                  INQUIRY RECEIVED
                </h4>
                <p className="text-sm text-[#E9E9E9]/80 max-w-md">
                  Thank you, <span className="text-white font-medium">{formState.name}</span>. A private concierge has been assigned to your request and will reach out shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs uppercase tracking-[0.25em] text-white/60 hover:text-white underline underline-offset-4"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-[0.2em] text-white/80 font-medium mb-2"
                      style={{ fontFamily: fonts.subHeading }}
                    >
                      Guest Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Lord / Lady / Mr. John Doe"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/15 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-[0.2em] text-white/80 font-medium mb-2"
                      style={{ fontFamily: fonts.subHeading }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="guest@sanctuary.com"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/15 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Sanctuary Preference */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-[0.2em] text-white/80 font-medium mb-2"
                      style={{ fontFamily: fonts.subHeading }}
                    >
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/15 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="suite"
                      className="block text-xs uppercase tracking-[0.2em] text-white/80 font-medium mb-2"
                      style={{ fontFamily: fonts.subHeading }}
                    >
                      Preferred Sanctuary
                    </label>
                    <select
                      id="suite"
                      name="suite"
                      value={formState.suite}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#181616] border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                    >
                      <option value="Ocean Villa">Ocean Villa (Overwater)</option>
                      <option value="Lagoon Presidential Suite">Lagoon Presidential Suite</option>
                      <option value="Aura Wellness Sanctuary">Aura Wellness Sanctuary</option>
                      <option value="Mirage Sunset Residence">Mirage Sunset Residence</option>
                      <option value="Private Island Estate">Private Island Estate Charter</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Dates & Guest Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="dates"
                      className="block text-xs uppercase tracking-[0.2em] text-white/80 font-medium mb-2"
                      style={{ fontFamily: fonts.subHeading }}
                    >
                      Preferred Dates / Season
                    </label>
                    <input
                      type="text"
                      id="dates"
                      name="dates"
                      value={formState.dates}
                      onChange={handleChange}
                      placeholder="e.g. Dec 2026 / Spring Retreat"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/15 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-xs uppercase tracking-[0.2em] text-white/80 font-medium mb-2"
                      style={{ fontFamily: fonts.subHeading }}
                    >
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formState.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#181616] border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                    >
                      <option value="1 Guest">1 Guest (Solo Retreat)</option>
                      <option value="2 Guests">2 Guests (Couple Sanctuary)</option>
                      <option value="3-4 Guests">3-4 Guests (Family / Suite)</option>
                      <option value="5+ Guests">5+ Guests (Estate Buyout)</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-xs uppercase tracking-[0.2em] text-white/80 font-medium mb-2"
                    style={{ fontFamily: fonts.subHeading }}
                  >
                    Bespoke Requests & Preferences
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formState.notes}
                    onChange={handleChange}
                    placeholder="Dietary preferences, seaplane transfers, special celebrations, private catamaran charter..."
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/15 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div id="enquire" className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 border border-white/80 bg-transparent text-white uppercase text-xs sm:text-[13px] tracking-[0.25em] font-medium overflow-hidden transition-colors duration-300 cursor-pointer disabled:opacity-50"
                    style={{ fontFamily: fonts.subHeading }}
                  >
                    {/* Slide up white fill */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
                    />

                    {/* Text Flip */}
                    <span className="relative z-10 flex items-center space-x-3 overflow-hidden">
                      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                        {isSubmitting ? "TRANSMITTING..." : "SUBMIT INQUIRY"}
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center justify-center text-[#141212] transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0"
                      >
                        {isSubmitting ? "TRANSMITTING..." : "SUBMIT INQUIRY"}
                      </span>
                      <ArrowRight className="w-4 h-4 text-white group-hover:text-[#141212] transition-colors relative z-10" />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
