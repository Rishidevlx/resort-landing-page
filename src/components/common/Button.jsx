import React from "react";
import { themeConfig } from "../../config/themeConfig";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  ariaLabel,
  type = "button",
  disabled = false,
}) {
  const isPrimary = variant === "primary";
  const isDark = variant === "dark" || variant === "outline-dark";
  const baseStyles =
    "group relative inline-flex items-center justify-center overflow-hidden uppercase font-medium tracking-[0.2em] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none";

  const colorStyles = isDark
    ? "border border-black bg-transparent focus-visible:ring-black focus-visible:ring-offset-white"
    : "border border-white/80 bg-transparent focus-visible:ring-white focus-visible:ring-offset-[#141212]";

  const paddingStyles = isPrimary || isDark
    ? "px-7 py-3 text-[13px]"
    : "px-5 py-2.5 text-[13px]";

  const combinedStyles = `${baseStyles} ${colorStyles} ${paddingStyles} ${
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  } ${className}`;
  const buttonContent = (
    <>
<span
        aria-hidden="true"
        className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out ${
          isDark ? "bg-[#141212]" : "bg-white"
        }`}
      />
<span className="relative z-10 block overflow-hidden leading-tight">
<span
          className={`block transition-transform duration-300 ease-out group-hover:-translate-y-full ${
            isDark ? "text-[#141212]" : "text-white"
          }`}
        >
          {children}
        </span>
<span
          aria-hidden="true"
          className={`absolute inset-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 ${
            isDark ? "text-white" : "text-[#141212]"
          }`}
        >
          {children}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
        style={{ fontFamily: themeConfig.fonts.subHeading }}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
      style={{ fontFamily: themeConfig.fonts.subHeading }}
    >
      {buttonContent}
    </button>
  );
}
