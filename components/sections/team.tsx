import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

import RobinImg from "@/public/people/robin-singh.png";
import KritiImg from "@/public/people/kriti-agarwal.png";
import UmeshImg from "@/public/people/umesh-sharma.png";
import AshwaniImg from "@/public/people/ashwani-jp-singh.png";
import SaharshImg from "@/public/people/sr.jpg";
import UdayImg from "@/public/people/uday-mahurkar.png";
import AnilImg from "@/public/people/anil-rao.png";
import RiyankaImg from "@/public/people/riyanka-roy.png";

type Founder = {
  num: string;
  photo: StaticImageData;
  name: string;
  role: string;
  pedigree: string;
  bio: string;
  contactUrl: string;
};

const founders: Founder[] = [
  {
    num: "01",
    photo: RobinImg,
    name: "Robin Singh",
    role: "Co-Founder, CEO",
    pedigree: "University of Delhi",
    bio: "Owns company vision, fundraising, and go to market. Leads institutional partnerships and B2B verification pilots.",
    contactUrl: "https://x.com/robinjpsingh",
  },
  {
    num: "02",
    photo: KritiImg,
    name: "Kriti Agarwal",
    role: "Co-Founder, CCO",
    pedigree: "LSE, University of London",
    bio: "Owns content strategy, editorial standards, and the verified creator program.",
    contactUrl: "https://x.com/KritiAgarwal29",
  },
  {
    num: "03",
    photo: SaharshImg,
    name: "Saharsh Sikaria",
    role: "Chief Technology Officer",
    pedigree: "IIT Delhi",
    bio: "Owns the application stack, infra, ingestion, and ML serving. Works directly with Umesh on AI integration.",
    contactUrl: "https://www.linkedin.com/in/saharshsikaria",
  },
  {
    num: "04",
    photo: UmeshImg,
    name: "Umesh Sharma",
    role: "Co-Founder, Chief AI Officer",
    pedigree: "Carnegie Mellon University",
    bio: "Built the original AI pipeline. Owns model architecture, the neutralisation eval system, and the Indic SLM roadmap.",
    contactUrl: "https://www.linkedin.com/in/r-umeshsharma/",
  },
];

type Advisor = {
  photo: StaticImageData;
  name: string;
  role: string;
  affiliation: string;
  contactUrl: string;
};

const advisors: Advisor[] = [
  {
    photo: AshwaniImg,
    name: "Ashwani JP Singh",
    role: "Strategy, Growth & Governance",
    affiliation: "Founder, Green Governance India · 16 yrs, Govt of India",
    contactUrl: "https://x.com/ashwanijpsingh",
  },
  {
    photo: UdayImg,
    name: "Uday Mahurkar",
    role: "Former Information Commissioner, GoI",
    affiliation: "Former Deputy Editor, India Today Group",
    contactUrl: "https://www.linkedin.com/in/uday-mahurkar-391830219/",
  },
  {
    photo: AnilImg,
    name: "Anil Rao, IPS (Retd.)",
    role: "Former CID Chief, Haryana",
    affiliation: "VP, DAV College Managing Committee",
    contactUrl: "https://www.linkedin.com/in/anil-rao-846220220/",
  },
  {
    photo: RiyankaImg,
    name: "Riyanka Choudhury",
    role: "AI Governance at MIT, IBM, Meta",
    affiliation: "Fellow, CodeX · Stanford Center for Legal Informatics",
    contactUrl: "https://www.linkedin.com/in/riyanka-roy-choudhury/",
  },
];

export default function Team() {
  return (
    <section id="team" className="section-paper py-20 sm:py-24 lg:py-32 border-t border-b rule-ink">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
        {/* FOUNDERS */}
        <div className="mb-12 lg:mb-16">
          <div className="eyebrow-ink mb-5">Built by</div>
          <h2 className="display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] leading-[0.98] tracking-tightest text-balance ink max-w-3xl">
            The people behind{" "}
            <span className="display-italic ink-60">the pipeline.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {founders.map((f) => (
            <Link
              key={f.name}
              href={f.contactUrl}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border rule-ink bg-white/40 p-7 sm:p-8 hover:bg-white/70 transition-colors lift-card"
            >
              <div className="flex items-start gap-4 mb-5">
                <span className="mono text-[10px] tracking-[0.2em] text-[#E6481E] pt-2">
                  {f.num}
                </span>
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 overflow-hidden rounded-xl shrink-0">
                  <Image
                    src={f.photo}
                    alt={f.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    sizes="112px"
                  />
                </div>
              </div>
              <h3 className="display text-[22px] sm:text-[24px] lg:text-[26px] leading-[1.1] ink">{f.name}</h3>
              <div className="mt-2 mono text-[10px] sm:text-[11px] tracking-wider uppercase text-[#E6481E]">
                {f.role}
              </div>
              <div className="mt-1 text-[12px] ink-45 italic">{f.pedigree}</div>
              <p className="mt-3 text-[13px] leading-relaxed ink-60">{f.bio}</p>
              <div className="mt-4 inline-flex items-center gap-2 mono text-[10px] sm:text-[11px] tracking-wider uppercase ink-45 group-hover:text-[#E6481E] transition-colors">
                <span>Profile</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* ADVISORS */}
        <div className="mt-20 lg:mt-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-10 lg:mb-14">
            <div className="lg:col-span-8">
              <div className="eyebrow-ink mb-5">Honorary advisors</div>
              <h2 className="display text-[28px] sm:text-[36px] md:text-[44px] lg:text-[54px] leading-[0.98] tracking-tightest text-balance ink">
                Counsel from journalism, governance,{" "}
                <span className="display-italic ink-60">and AI policy.</span>
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {advisors.map((a) => (
              <Link
                key={a.name}
                href={a.contactUrl}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border rule-ink bg-white/40 p-7 sm:p-8 hover:bg-white/70 transition-colors lift-card"
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 overflow-hidden rounded-xl mb-5">
                  <Image
                    src={a.photo}
                    alt={a.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    sizes="96px"
                  />
                </div>
                <h3 className="display text-[18px] sm:text-[20px] lg:text-[22px] leading-tight ink">{a.name}</h3>
                <div className="mt-2.5 text-[12.5px] sm:text-[13px] ink">{a.role}</div>
                <div className="mt-1 text-[12.5px] sm:text-[13px] ink-45">{a.affiliation}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
