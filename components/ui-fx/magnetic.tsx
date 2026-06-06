"use client";
import { useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Radius (px) within which cursor influence begins. */
  radius?: number;
  /** Max translation (px) when cursor sits over the element. */
  strength?: number;
  className?: string;
};

/**
 * Subtle magnetic pull. Wrap a button. Disabled for fine-pointer-free devices.
 */
export default function Magnetic({
  children,
  radius = 90,
  strength = 8,
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const d = Math.hypot(dx, dy);
    if (d > radius) {
      el.style.transform = "translate3d(0,0,0)";
      return;
    }
    const f = 1 - d / radius;
    const tx = (dx / radius) * strength * (0.5 + f * 0.5);
    const ty = (dy / radius) * strength * (0.5 + f * 0.5);
    el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0,0,0)";
  };

  return (
    <span
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block ${className}`}
      style={{ display: "inline-block" }}
    >
      <span
        ref={ref}
        style={{
          display: "inline-block",
          transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
          willChange: "transform",
        }}
      >
        {children}
      </span>
    </span>
  );
}
