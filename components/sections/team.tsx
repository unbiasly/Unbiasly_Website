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
    role: "Co-Founder & CEO",
    pedigree: "Carnegie Mellon University",
    bio: "Built the original AI pipeline. Owns model architecture, the neutralisation evaluation system, and the proprietary Indic SLM roadmap.",
    contactUrl: "https://www.linkedin.com/in/r-umeshsharma/",
  },
  {
    num: "02",
    photo: AshwaniImg,
    name: "Ashwani JP Singh",
    role: "Co-Founder & COO",
    pedigree: "16 years, Government of India",
    bio: "Owns strategy, growth, institutional distribution, partnerships, and editorial operations. Founder of Green Governance India.",
    contactUrl: "https://x.com/ashwanijpsingh",
  },
  {
    num: "03",
    photo: SaharshImg,
    name: "Saharsh Sikaria",
    role: "Chief Technology Officer",
    pedigree: "IIT Delhi",
    bio: "Owns the application stack, infrastructure, ingestion systems, and ML serving. Works directly with Umesh on the AI integration layer.",
    contactUrl: "https://www.linkedin.com/in/saharshsikaria",
  },
  {
    num: "04",
    photo: KritiImg,
    name: "Kriti Agarwal",
    role: "Co-Founder & Chief Content Officer",
    pedigree: "LSE, University of London",
    bio: "Owns content strategy, editorial standards, and the verified-creator program. Sets the bar for what gets published and how.",
    contactUrl: "https://x.com/KritiAgarwal29",
  },
  {
    num: "05",
    photo: RobinImg,
    name: "Robin Singh",
    role: "Co-Founder & Chief Business Officer",
    pedigree: "University of Delhi",
    bio: "Owns revenue, partnerships, and go to market. Leads B2B verification pilots, institutional channels, and the monetisation roadmap.",
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
    role: "Former Information Commissioner, GoI",
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
    role: "AI Governance, MIT, IBM, Meta",
    affiliation: "Fellow, CodeX, Stanford Center for Legal Informatics",
    contactUrl: "https://www.linkedin.com/in/riyanka-roy-choudhury/",
  },
];

export default function Team() {
  return (
    <>
      <section id="team" className="border-t border-white/[0.06] py-24 lg:py-40 bg-black">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-20 lg:mb-28">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-6">The Founders</div>
              <h2 className="display text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tightest text-balance">
                Built by people who{" "}
                <span className="display-italic text-white/55">
                  work in person, in Delhi.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-3 lg:col-start-10 lg:pt-3">
              <p className="text-[15px] leading-[1.65] text-white/55">
                Two ends of the same problem. Umesh at Carnegie Mellon, Ashwani
                on the ground across millions of citizens. Eighteen months of
                building together in person.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {founders.map((f) => (
              <Link
                key={f.name}
                href={f.contactUrl}
                target="_blank"
                rel="noreferrer"
                className="group bg-black p-8 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-start gap-5 mb-6">
                  <span className="mono text-[10px] tracking-[0.2em] text-accent pt-2">
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
                <h3 className="display text-2xl lg:text-[28px] leading-[1.1]">
                  {f.name}
                </h3>
                <div className="mt-2 mono text-[11px] tracking-wider uppercase text-accent">
                  {f.role}
                </div>
                <div className="mt-1 text-[12px] text-white/45 italic">
                  {f.pedigree}
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-white/55">
                  {f.bio}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 mono text-[11px] tracking-wider uppercase text-white/40 group-hover:text-accent transition-colors">
                  <span>Profile</span>
                  <span className="transition-transform group-hover:translate-x-1"></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="advisors" className="border-t border-white/[0.06] py-24 lg:py-40 mesh-glow-soft">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-24">
            <div className="eyebrow mb-6">Honorary Advisors</div>
            <h2 className="display text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tightest text-balance">
              The people behind{" "}
              <span className="display-italic text-white/55">
                the people building this.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {advisors.map((a) => (
              <Link
                key={a.name}
                href={a.contactUrl}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 lg:p-10 hover:bg-white/[0.04] transition-colors lift-card"
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
                <h3 className="display text-xl lg:text-2xl leading-tight">{a.name}</h3>
                <div className="mt-3 text-[13px] text-white/75">{a.role}</div>
                <div className="mt-1 text-[13px] text-white/50">{a.affiliation}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
