"use client";
import { ReactNode, Fragment } from "react";

type Props = {
  text: string;
  className?: string;
  /** ms */
  delayStart?: number;
  /** ms per word */
  stagger?: number;
  /** Wrap each word's italic content in a span via marker. Pass tokens as JSX manually if needed. */
  italicMarker?: string; // e.g. "*"
  italicClass?: string;
  /** Custom node for the final newline separator if needed. */
  separator?: ReactNode;
};

/**
 * Splits text on whitespace and animates each word with the .reveal-word class.
 * Lines (split on \n) stay on separate lines.
 * If italicMarker is "*", words like *italic* render in italicClass.
 */
export default function RevealWords({
  text,
  className = "",
  delayStart = 0,
  stagger = 70,
  italicMarker,
  italicClass = "",
}: Props) {
  let i = 0;
  const lines = text.split("\n");

  return (
    <span className={className}>
      {lines.map((line, li) => {
        const words = line.split(/\s+/).filter(Boolean);
        return (
          <Fragment key={li}>
            {words.map((w, wi) => {
              const delay = delayStart + i * stagger;
              i++;
              const isItalic =
                italicMarker &&
                w.startsWith(italicMarker) &&
                w.endsWith(italicMarker);
              const display = isItalic
                ? w.slice(italicMarker.length, -italicMarker.length)
                : w;
              return (
                <Fragment key={`${li}-${wi}`}>
                  <span
                    className={`reveal-word ${isItalic ? italicClass : ""}`}
                    style={{ animationDelay: `${delay}ms` }}
                  >
                    {display}
                  </span>
                  {wi < words.length - 1 && " "}
                </Fragment>
              );
            })}
            {li < lines.length - 1 && <br />}
          </Fragment>
        );
      })}
    </span>
  );
}
