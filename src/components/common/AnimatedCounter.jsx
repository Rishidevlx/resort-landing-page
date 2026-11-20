import React, { useEffect, useState, useRef } from "react";

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 1600,
  trigger = true,
}) {
  const [count, setCount] = useState(0);
  const prevTrigger = useRef(false);

  useEffect(() => {
    if (trigger && !prevTrigger.current) {
      prevTrigger.current = true;
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress * (2 - progress);
        setCount(Math.floor(ease * target));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(animate);
    } else if (!trigger && prevTrigger.current) {
      prevTrigger.current = false;
      setCount(0);
    }
  }, [trigger, target, duration]);

  return (
    <span className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
