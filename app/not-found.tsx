import Link from "next/link";
import AppStores from "@/components/custom/app-stores";

export default function NotFound() {
  return (
    <>
      <section className="border-b border-white/[0.06] mesh-glow">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-40 pb-24 lg:pt-48 lg:pb-32 text-center">
          <div className="display text-[28vw] lg:text-[16rem] leading-none tracking-tightest text-accent">
            404
          </div>
          <div className="eyebrow mt-6">Page not found</div>
          <h1 className="display text-3xl md:text-5xl leading-tight tracking-tight mt-4 text-balance max-w-2xl mx-auto">
            The link you followed is probably broken, or the page has been removed.
          </h1>
          <p className="mt-5 text-white/55 max-w-md mx-auto">
            Try heading back to the homepage, or try the framing analyzer.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Link href="/" className="btn-primary">← Home</Link>
            <Link href="/#analyzer" className="btn-ghost">Try the analyzer</Link>
          </div>
        </div>
      </section>
      <AppStores />
    </>
  );
}
