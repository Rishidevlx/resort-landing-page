import React, { useState } from "react";
import { motion } from "motion/react";
import { themeConfig } from "../../../config/themeConfig";
import Button from "../../common/Button";
import {
  validateContactField,
  validateContactForm,
  formatPhoneNumber,
  VALIDATION_LIMITS,
} from "../../../validations/contactValidation";
import footerAboveImg from "../../../assets/footer-above-img.png";

export default function ContactFormSection() {
  const { fonts } = themeConfig;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateContactField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, phone: formatted }));
      if (touched.phone) {
        setErrors((prev) => ({
          ...prev,
          phone: validateContactField("phone", formatted),
        }));
      }
      return;
    }

    if (name === "name" || name === "email") {
      const cappedValue = value.slice(0, VALIDATION_LIMITS.NAME_MAX);
      setFormData((prev) => ({ ...prev, [name]: cappedValue }));
      if (touched[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: validateContactField(name, cappedValue),
        }));
      }
      return;
    }

    if (name === "message") {
      const cappedValue = value.slice(0, VALIDATION_LIMITS.MESSAGE_MAX);
      setFormData((prev) => ({ ...prev, message: cappedValue }));
      if (touched.message) {
        setErrors((prev) => ({
          ...prev,
          message: validateContactField("message", cappedValue),
        }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    const { errors: newErrors, isValid } = validateContactForm(formData);
    setErrors(newErrors);

    if (!isValid) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-white text-[#141212] overflow-hidden"
      style={{ fontFamily: fonts.body }}
    >
<div className="relative w-full h-14 sm:h-20 -mt-px pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #141212 0%, rgba(20,18,18,0.4) 30%, rgba(255,255,255,0.7) 75%, #ffffff 100%)",
          }}
        />
      </div>
<div className="max-w-3xl mx-auto px-6 sm:px-10 pt-8 sm:pt-14 pb-10 sm:pb-14">
<motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-18"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl text-[#141212] font-normal tracking-tight"
            style={{ fontFamily: fonts.heading }}
          >
            Begin your journey
          </h2>
          <p
            className="mt-4 text-xs sm:text-sm tracking-[0.25em] uppercase text-black/45 font-medium"
            style={{ fontFamily: fonts.subHeading }}
          >
            CURATED RETREATS & BESPOKE SANCTUARY EXPERIENCES
          </p>
        </motion.div>
{isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16 px-6 space-y-5"
          >
            <div className="w-14 h-14 rounded-full border border-black/20 flex items-center justify-center mx-auto text-black/80">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3
              className="text-2xl sm:text-3xl text-[#141212]"
              style={{ fontFamily: fonts.heading }}
            >
              Enquiry Received
            </h3>
            <p className="text-sm text-black/60 max-w-md mx-auto leading-relaxed">
              Thank you for connecting with Riha Palace. Our private island
              concierge will reach out to you within 2 hours.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 inline-block text-xs uppercase tracking-[0.2em] font-medium text-black/60 hover:text-black border-b border-black/30 hover:border-black pb-1 transition-all cursor-pointer"
            >
              Send Another Enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-9 sm:space-y-11"
            noValidate
          >
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
<div className="group relative">
                <label
                  htmlFor="contact-name"
                  className="block text-[11px] sm:text-xs uppercase tracking-[0.22em] text-black/50 font-medium mb-1.5 group-focus-within:text-[#141212] transition-colors"
                  style={{ fontFamily: fonts.subHeading }}
                >
                  NAME
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  maxLength={VALIDATION_LIMITS.NAME_MAX}
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur("name")}
                  placeholder="Your Name"
                  className={`w-full bg-transparent border-b py-2.5 sm:py-3 text-[#141212] placeholder:text-black/30 text-sm sm:text-base focus:outline-none transition-colors duration-300 ${
                    errors.name && touched.name
                      ? "border-red-500 focus:border-red-600"
                      : "border-black/20 focus:border-black"
                  }`}
                />
                {errors.name && touched.name && (
                  <p className="text-[11px] text-red-600 mt-1 tracking-wide font-medium">
                    {errors.name}
                  </p>
                )}
              </div>
<div className="group relative">
                <label
                  htmlFor="contact-email"
                  className="block text-[11px] sm:text-xs uppercase tracking-[0.22em] text-black/50 font-medium mb-1.5 group-focus-within:text-[#141212] transition-colors"
                  style={{ fontFamily: fonts.subHeading }}
                >
                  EMAIL
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  maxLength={VALIDATION_LIMITS.EMAIL_MAX}
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  placeholder="Your Email"
                  className={`w-full bg-transparent border-b py-2.5 sm:py-3 text-[#141212] placeholder:text-black/30 text-sm sm:text-base focus:outline-none transition-colors duration-300 ${
                    errors.email && touched.email
                      ? "border-red-500 focus:border-red-600"
                      : "border-black/20 focus:border-black"
                  }`}
                />
                {errors.email && touched.email && (
                  <p className="text-[11px] text-red-600 mt-1 tracking-wide font-medium">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
<div className="group relative">
              <label
                htmlFor="contact-phone"
                className="block text-[11px] sm:text-xs uppercase tracking-[0.22em] text-black/50 font-medium mb-1.5 group-focus-within:text-[#141212] transition-colors"
                style={{ fontFamily: fonts.subHeading }}
              >
                CONTACT NUMBER
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur("phone")}
                placeholder="Your Phone Number"
                className={`w-full bg-transparent border-b py-2.5 sm:py-3 text-[#141212] placeholder:text-black/30 text-sm sm:text-base focus:outline-none transition-colors duration-300 font-mono ${
                  errors.phone && touched.phone
                    ? "border-red-500 focus:border-red-600"
                    : "border-black/20 focus:border-black"
                }`}
              />
              {errors.phone && touched.phone && (
                <p className="text-[11px] text-red-600 mt-1 tracking-wide font-medium">
                  {errors.phone}
                </p>
              )}
            </div>
<div className="group relative">
              <label
                htmlFor="contact-message"
                className="block text-[11px] sm:text-xs uppercase tracking-[0.22em] text-black/50 font-medium mb-1.5 group-focus-within:text-[#141212] transition-colors"
                style={{ fontFamily: fonts.subHeading }}
              >
              MESSAGE
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                maxLength={VALIDATION_LIMITS.MESSAGE_MAX}
                value={formData.message}
                onChange={handleChange}
                onBlur={() => handleBlur("message")}
                placeholder="Tell us about your stay..."
                className={`w-full bg-transparent border-b py-2.5 sm:py-3 text-[#141212] placeholder:text-black/30 text-sm sm:text-base focus:outline-none transition-colors duration-300 resize-none min-h-[105px] ${
                  errors.message && touched.message
                    ? "border-red-500 focus:border-red-600"
                    : "border-black/20 focus:border-black"
                }`}
              />
              {errors.message && touched.message && (
                <p className="text-[11px] text-red-600 mt-1 tracking-wide font-medium">
                  {errors.message}
                </p>
              )}
            </div>
<div className="pt-6 sm:pt-8 flex justify-center">
              <Button
                type="submit"
                variant="outline-dark"
                disabled={isSubmitting}
                className="px-12 sm:px-16 py-3.5 text-xs tracking-[0.25em]"
              >
                {isSubmitting ? "TRANSMITTING..." : "SEND ENQUIRY"}
              </Button>
            </div>
          </motion.form>
        )}
      </div>
<div className="relative w-full overflow-hidden leading-none -mb-px">
        <img
          src={footerAboveImg}
          alt="Riha Palace Sanctuary Skyline"
          className="w-full h-auto max-h-[160px] sm:max-h-[200px] lg:max-h-[240px] object-cover object-bottom select-none pointer-events-none block"
          loading="eager"
        />
      </div>
    </section>
  );
}
