import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isClicking = false;
    let isVisible = false;
    let isLight = false;
    let rafId = null;

    const checkIsLight = (target) => {
      if (!target) return false;
      if (target.closest("#highlights, #contact, .bg-white, [data-theme='light']")) {
        return true;
      }
      let curr = target;
      while (curr && curr !== document.body && curr !== document.documentElement) {
        const bg = window.getComputedStyle(curr).backgroundColor;
        if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
          const match = bg.match(/\d+/g);
          if (match && match.length >= 3) {
            const r = parseInt(match[0], 10);
            const g = parseInt(match[1], 10);
            const b = parseInt(match[2], 10);
            const lum = (r * 299 + g * 587 + b * 114) / 1000;
            return lum > 160;
          }
        }
        curr = curr.parentElement;
      }
      return false;
    };

    const isTextInput = (target) => {
      if (!target) return false;
      if (target.closest("textarea, [contenteditable='true']")) return true;
      const input = target.closest("input");
      if (input) {
        const nonTextTypes = ["button", "submit", "reset", "checkbox", "radio", "range", "color", "file", "image"];
        return !nonTextTypes.includes(input.type?.toLowerCase());
      }
      return false;
    };

    const updateCursorColor = (light) => {
      if (light) {
        ring.style.borderColor = "#000000";
        dot.style.backgroundColor = "#000000";
      } else {
        ring.style.borderColor = "#FFFFFF";
        dot.style.backgroundColor = "#FFFFFF";
      }
    };

    updateCursorColor(false);

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target;

      // When hovering over input fields or textareas, hide custom circle cursor so native text I-beam is clearly visible
      if (isTextInput(target)) {
        dot.style.opacity = "0";
        ring.style.opacity = "0";
        isHovered = false;
        return;
      }

      if (!isVisible) {
        isVisible = true;
        ringX = mouseX;
        ringY = mouseY;
      }

      dot.style.opacity = "1";
      ring.style.opacity = "1";

      const light = checkIsLight(target);
      if (light !== isLight) {
        isLight = light;
        updateCursorColor(isLight);
      }

      if (
        target &&
        (target.closest("a, button, [role='button'], .cursor-pointer, select") ||
          window.getComputedStyle(target).cursor === "pointer")
      ) {
        isHovered = true;
      } else {
        isHovered = false;
      }
    };

    const onMouseDown = () => {
      isClicking = true;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      const ringScale = isClicking ? 0.8 : isHovered ? 1.45 : 1;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white opacity-0 pointer-events-none"
        style={{
          willChange: "transform",
          transition: "border-color 0.2s ease, opacity 0.3s ease",
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white opacity-0 pointer-events-none"
        style={{
          willChange: "transform",
          transition: "background-color 0.2s ease, opacity 0.2s ease",
        }}
      />
    </div>
  );
}
