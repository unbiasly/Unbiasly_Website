"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  start?: number;
  duration?: number;        // seconds
  decimals?: number;
  prefix?: string;
  suffix?: string;
  formatter?: (n: number) => string;
  className?: string;
  /** Restart the animation on key change (useful for live ticking). */
  restartKey?: string | number;
};

/**
 * Count-up that fires when the element enters the viewport.
 * Uses requestAnimationFrame with an ease-out cubic.
 */
export default function CountUp({
  end,
  start = 0,
  duration = 1.4,
  decimals = 0,
  prefix = "",
  suffix = "",
  formatter,
  className = "",
  restartKey,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(start);
  const [shouldRun, setShouldRun] = useState(false);

  // Trigger on viewport entry
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Re-run when restartKey changes (after first run)
  useEffect(() => {
    if (restartKey === undefined) return;
    if (shouldRun) setShouldRun(false);
    const t = requestAnimationFrame(() => setShouldRun(true));
    return () => cancelAnimationFrame(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restartKey]);

  useEffect(() => {
    if (!shouldRun) return;
    let raf = 0;
    const t0 = performance.now();
    const from = start;
    const to = end;
    const dur = duration * 1000;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(from + (to - from) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shouldRun, end, start, duration]);

  const display = formatter
    ? formatter(value)
    : value.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
