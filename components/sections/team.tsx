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
    photo: UmeshImg,
    name: "Umesh Sharma",
    role: "Co-Founder and CEO",
    pedigree: "Carnegie Mellon University",
    bio: "Built the original AI pipeline. He owns model architecture, the neutralisation evaluation system, and the proprietary Indic SLM roadmap.",
    contactUrl: "https://www.linkedin.com/in/r-umeshsharma/",
  },
  {
    num: "02",
    photo: AshwaniImg,
    name: "Ashwani JP Singh",
    role: "Co-Founder and COO",
    pedigree: "16 years, Government of India",
    bio: "Owns strategy, growth, institutional distribution, partnerships, and editorial operations. He is also the founder of Green Governance India.",
    contactUrl: "https://x.com/ashwanijpsingh",
  },
  {
    num: "03",
    photo: SaharshImg,
    name: "Saharsh Sikaria",
    role: "Chief Technology Officer",
    pedigree: "IIT Delhi",
    bio: "Owns the application stack, infrastructure, ingestion systems, and ML serving. He works directly with Umesh on the AI integration layer.",
    contactUrl: "https://www.linkedin.com/in/saharshsikaria",
  },
  {
    num: "04",
    photo: KritiImg,
    name: "Kriti Agarwal",
    role: "Co-Founder and Chief Content Officer",
    pedigree: "LSE, University of London",
    bio: "Owns content strategy, editorial standards, and the verified creator program. She sets the bar for what gets published and how.",
    contactUrl: "https://x.com/KritiAgarwal29",
  },
  {
    num: "05",
    photo: RobinImg,
    name: "Robin Singh",
    role: "Co-Founder and Chief Business Officer",
    pedigree: "University of Delhi",
    bio: "Owns revenue, partnerships, and go to market. He leads B2B verification pilots, institutional channels, and the monetisation roadmap.",
    contactUrl: "https://x.com/robinjpsingh",
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
    photo: UdayImg,
    name: "Uday Mahurkar",
    role: "Former Information Commissioner, Government of India",
    affiliation: "Former Deputy Editor, India Today Group",
    contactUrl: "https://www.linkedin.com/in/uday-mahurkar-391830219/",
  },
  {
    photo: AnilImg,
    name: "Anil Rao, IPS (Retd.)",
    role: "Former CID Chief, Haryana",
    affiliation: "Vice President, DAV College Managing Committee",
    contactUrl: "https://www.linkedin.com/in/anil-rao-846220220/",
  },
  {
    photo: RiyankaImg,
    name: "Riyanka Choudhury",
    role: "AI Governance at MIT, IBM, and Meta",
    affiliation: "Fellow, CodeX, Stanford Center for Legal Informatics",
    contactUrl: "https://www.linkedin.com/in/riyanka-roy-choudhury/",
  },
];

export default function Team() {
  return (
    <section id="team" className="section-paper py-24 lg:py-40 border-t border-b rule-ink">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* FOUNDERS */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20">
          <div className="lg:col-span-8">
            <div className="eyebrow-ink mb-6">Built by</div>
            <h2 className="display text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tightest text-balance ink">
              The people behind{" "}
              <span className="display-italic ink-60">the pipeline.</span>
            </h2>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 lg:pt-3">
            <p className="text-[15px] leading-[1.65] ink-60">
              Two ends of the same problem. Umesh from Carnegie Mellon on the
              model side. Ashwani with 16 years inside the Government of India
              on the distribution side. Eighteen months of building together,
              always in person.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.08] border rule-ink rounded-2xl overflow-hidden">
          {founders.map((f) => (
            <Link
              key={f.name}
              href={f.contactUrl}
              target="_blank"
              rel="noreferrer"
              className="group bg-[#F5F1EA] p-8 lg:p-9 hover:bg-white/60 transition-colors"
            >
              <div className="flex items-start gap-5 mb-6">
                <span className="mono text-[10px] tracking-[0.2em] text-[#E6481E] pt-2">
                  {f.num}
                </span>
                <div className="relative w-24 h-24 lg:w-28 lg:h-28 overflow-hidden rounded-xl shrink-0">
                  <Image
                    src={f.photo}
                    alt={f.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    sizes="112px"
                  />
                </div>
              </div>
              <h3 className="display text-2xl lg:text-[28px] leading-[1.1] ink">{f.name}</h3>
              <div className="mt-2 mono text-[11px] tracking-wider uppercase text-[#E6481E]">
                {f.role}
              </div>
              <div className="mt-1 text-[12px] ink-45 italic">{f.pedigree}</div>
              <p className="mt-4 text-[13.5px] leading-relaxed ink-60">{f.bio}</p>
              <div className="mt-5 inline-flex items-center gap-2 mono text-[11px] tracking-wider uppercase ink-45 group-hover:text-[#E6481E] transition-colors">
                <span>Profile</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* ADVISORS */}
        <div className="mt-24 lg:mt-32">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20">
            <div className="lg:col-span-8">
              <div className="eyebrow-ink mb-6">Honorary advisors</div>
              <h2 className="display text-4xl md:text-5xl lg:text-[4.5rem] leading-[0.95] tracking-tightest text-balance ink">
                Counsel from journalism, governance,{" "}
                <span className="display-italic ink-60">and AI policy.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {advisors.map((a) => (
              <Link
                key={a.name}
                href={a.contactUrl}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border rule-ink bg-white/40 p-8 lg:p-9 hover:bg-white/70 transition-colors lift-card"
              >
                <div className="relative w-20 h-20 lg:w-24 lg:h-24 overflow-hidden rounded-xl mb-6">
                  <Image
                    src={a.photo}
                    alt={a.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    sizes="96px"
                  />
                </div>
                <h3 className="display text-xl lg:text-2xl leading-tight ink">{a.name}</h3>
                <div className="mt-3 text-[13px] ink">{a.role}</div>
                <div className="mt-1 text-[13px] ink-45">{a.affiliation}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
