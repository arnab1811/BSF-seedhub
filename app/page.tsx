import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Globe2, Handshake, MapPin, Network, ShieldCheck, Sprout, Users } from "lucide-react";
import heroImage from "@/assets/seed-hub-hero.webp";
import communityImage from "@/assets/community-seed-exchange.webp";
import botanicalImage from "@/assets/pgrfa-botanical.webp";

const pathways = [
  { number: "01", title: "Policy & regulation", icon: ShieldCheck },
  { number: "02", title: "Coordination & digital inclusion", icon: Network },
  { number: "03", title: "From seed relief to development", icon: Sprout },
  { number: "04", title: "Farmer-based seed systems", icon: Users },
];

const knowledgeItems: { type: string; title: string; detail: string; image: StaticImageData; alt: string }[] = [
  { type: "Field insight", title: "Seed diversity begins with farmer knowledge", detail: "Locally adapted crops, practical selection and the choices that build resilience.", image: heroImage, alt: "Farmers examining sorghum in a field" },
  { type: "Regional perspective", title: "Exchange turns diversity into shared capacity", detail: "How seed actors can connect evidence, materials and experience across borders.", image: communityImage, alt: "Community members sorting diverse seeds" },
  { type: "Practice note", title: "Plant genetic resources are living infrastructure", detail: "Conservation, access, value chains and knowledge belong in one connected system.", image: botanicalImage, alt: "Botanical illustration of regional food crops" },
];

export default function Home() {
  return (
    <main>
      <section className="hero hero-photographic">
        <Image className="hero-image" src={heroImage} alt="Farmers examining mature sorghum in an East African field" fill priority sizes="100vw" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow light"><Globe2 aria-hidden="true" /> A regional platform rooted in South Sudan</p>
          <h1>Rooted in <span>diversity.</span><br />Driven by resilience.</h1>
          <p className="hero-intro">The Seed Hub connects people, evidence and practical experience to strengthen seed systems in fragile and changing contexts.</p>
          <div className="hero-actions">
            <Link href="/pathways" className="button button-gold">Explore the pathways <ArrowRight aria-hidden="true" /></Link>
            <Link href="/projects/bsf" className="text-link light-link">Discover the BSF project <ChevronRight aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="hero-stat"><strong>10</strong><span>locally defined pathways towards a resilient seed sector</span></div>
      </section>

      <section className="orientation-band" aria-label="Explore by interest">
        <p>What brings you here?</p>
        <div className="orientation-links">
          <Link href="/knowledge?for=farmers">I work with farmers <ArrowRight aria-hidden="true" /></Link>
          <Link href="/knowledge?for=policy">I shape policy <ArrowRight aria-hidden="true" /></Link>
          <Link href="/knowledge?for=research">I research seed systems <ArrowRight aria-hidden="true" /></Link>
          <Link href="/projects">I support programmes <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="section section-pathways">
        <div className="section-heading">
          <div><p className="eyebrow">A shared direction</p><h2>Modern responses.<br />Locally grounded.</h2></div>
          <p>Seed-sector stakeholders identified ten practical routes for transformation—connecting policy, local production, quality assurance, research, markets and institutional capacity.</p>
        </div>
        <div className="pathway-grid">
          {pathways.map(({ number, title, icon: Icon }) => (
            <Link href="/pathways" className="pathway-card" key={number}>
              <span className="pathway-number">{number}</span><span className="pathway-icon"><Icon aria-hidden="true" /></span><h3>{title}</h3><ArrowRight aria-hidden="true" className="card-arrow" />
            </Link>
          ))}
          <Link href="/pathways" className="pathway-card pathway-card-all">
            <span className="pathway-number">05–10</span><span className="pathway-count">+6</span><h3>See the complete transformation framework</h3><ArrowRight aria-hidden="true" className="card-arrow" />
          </Link>
        </div>
      </section>

      <section className="project-feature">
        <div className="project-visual">
          <Image src={communityImage} alt="Community members sorting and exchanging diverse seed" fill sizes="(max-width: 1050px) 100vw, 50vw" />
          <div className="project-visual-caption"><Handshake aria-hidden="true" /><span>Farmer participation<br />at the centre</span></div>
        </div>
        <div className="project-workstreams">
          <p className="eyebrow light">Featured project</p><h2>From diversity<br />to local value.</h2>
          <p className="project-summary">The Benefit-sharing Fund project links participatory management of plant genetic resources with stronger local value chains and better knowledge sharing.</p>
          <ol>
            <li><span>01</span> Adapted PGRFA managed or improved with farmers’ participation</li>
            <li><span>02</span> Local value chains strengthened for production and consumption</li>
            <li><span>03</span> Data, materials and knowledge shared more effectively</li>
          </ol>
          <Link href="/projects/bsf" className="button button-gold">Enter the project space <ArrowRight aria-hidden="true" /></Link>
          <div className="project-meta"><span><MapPin aria-hidden="true" /> Regional collaboration</span><span><Users aria-hidden="true" /> Multi-partner initiative</span></div>
        </div>
      </section>

      <section className="section knowledge-section">
        <div className="section-heading compact">
          <div><p className="eyebrow">Explore the knowledge hub</p><h2>Ideas grounded<br />in practice.</h2></div>
          <Link href="/knowledge" className="text-link">Browse all resources <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="knowledge-grid">
          {knowledgeItems.map((item) => (
            <article className="knowledge-card" key={item.title}>
              <div className="knowledge-photo"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 720px) 100vw, 33vw" /></div>
              <div className="knowledge-copy"><p>{item.type}</p><h3>{item.title}</h3><span>{item.detail}</span><Link href="/knowledge">Read the story <ArrowRight aria-hidden="true" /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-callout">
        <div><p className="eyebrow light">The Hub grows through participation</p><h2>Bring your evidence.<br /><span>Grow the network.</span></h2></div>
        <div><p>Share a resource, connect with a seed-system expert or help document what is changing in your country.</p><Link href="/contact" className="button button-gold">Contribute to the Hub <ArrowRight aria-hidden="true" /></Link></div>
      </section>
    </main>
  );
}
