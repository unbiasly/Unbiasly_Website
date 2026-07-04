"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import UnbiaslyLogo from "@/public/unbiasly-ai-logo.png";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#product", label: "Product" },
  { href: "/#features", label: "Features" },
  { href: "/#team", label: "Team" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/75 backdrop-blur-xl border-b border-white/[0.06] text-white"
          : "bg-transparent border-b border-transparent text-black"
      )}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex items-center justify-between h-14 lg:h-16">
          <Link href="/" className="flex items-center group">
            <div className="relative w-[110px] h-[26px] lg:w-[130px] lg:h-[30px]">
              <Image
                src={UnbiaslyLogo}
                alt="UnbiaslyAI"
                fill
                sizes="(min-width: 1024px) 130px, 110px"
                className={cn(
                  "object-contain object-left opacity-95 group-hover:opacity-100 transition-all",
                  scrolled ? "" : "invert"
                )}
                priority
                quality={100}
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-[13px] tracking-tight transition-colors rounded-full",
                  isActive(item.href)
                    ? scrolled
                      ? "text-white"
                      : "text-black"
                    : scrolled
                    ? "text-white/60 hover:text-white"
                    : "text-black/55 hover:text-black"
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <span
                    className={cn(
                      "absolute inset-0 -z-10 rounded-full",
                      scrolled ? "bg-white/[0.08]" : "bg-black/[0.06]"
                    )}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/#closing"
              className={cn(
                "group inline-flex items-center gap-2 px-4 py-1.5 text-[13px] font-medium rounded-full transition-all",
                scrolled
                  ? "bg-white text-black hover:bg-accent hover:text-white"
                  : "bg-black text-white hover:bg-accent"
              )}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-white pulse-dot" />
              Get the app
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "lg:hidden flex items-center justify-center w-10 h-10 -mr-2",
                  scrolled ? "text-white" : "text-black"
                )}
                aria-label="Open menu"
              >
                <div className="flex flex-col gap-[5px]">
                  <span className={cn("block w-5 h-px", scrolled ? "bg-white" : "bg-black")} />
                  <span className={cn("block w-5 h-px", scrolled ? "bg-white" : "bg-black")} />
                  <span className={cn("block w-3 h-px ml-auto", scrolled ? "bg-white" : "bg-black")} />
                </div>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black border-l border-white/10 w-[85vw] sm:w-[420px] text-white"
            >
              <div className="flex flex-col h-full pt-8">
                <div className="eyebrow-muted mb-10">Menu</div>
                <nav className="flex flex-col gap-1">
                  {navItems.map((item, i) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="group flex items-baseline gap-4 py-4 border-b border-white/10"
                      >
                        <span className="mono text-[10px] tracking-widest text-white/40">
                          0{i + 1}
                        </span>
                        <span className="display text-4xl text-white group-hover:text-accent transition-colors">
                          {item.label}
                        </span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto pb-8">
                  <SheetClose asChild>
                    <Link href="/#closing" className="btn-primary">
                      <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
                      Get the app
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
