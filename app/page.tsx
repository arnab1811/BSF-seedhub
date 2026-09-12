import Link from "next/link";
import {
  ArrowRight, BookOpen, ChevronRight, Database, Globe2,
  Leaf, MapPin, Network, ShieldCheck, Sprout, Users,
} from "lucide-react";

const pathways = [
  { number: "01", title: "Policy & regulation", icon: ShieldCheck },
  { number: "02", title: "Coordination & digital inclusion", icon: Network },
  { number: "03", title: "From seed relief to development", icon: Sprout },
  { number: "04", title: "Farmer-based seed systems", icon: Users },
];

const knowledgeItems = [
  { type: "Field insight", title: "Can international genebanks reach fragile contexts?", detail: "Lessons from Somaliland for strengthening farmers’ adaptive capacity.", color: "coral" },
  { type: "Regional perspective", title: "Cultivating resilience across Africa’s seed sector", detail: "How connected actors, evidence and local learning can shift a system.", color: "blue" },
  { type: "Practice note", title: "Community gene banks as living infrastructure", detail: "Conservation, access and farmer knowledge in one local institution.", color: "gold" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><Globe2 aria-hidden="true" /> A regional platform rooted in South Sudan</p>
          <h1>Seeds carry more than a harvest.</h1>
          <p className="hero-intro">They carry memory, possibility and resilience. The Seed Hub brings people, evidence and practical experience together to strengthen seed systems in fragile and changing contexts.</p>
          <div className="hero-actions">
            <Link href="/pathways" className="button">Explore the pathways <ArrowRight aria-hidden="true" /></Link>
            <Link href="/projects/bsf" className="text-link">Discover the BSF project <ChevronRight aria-hidden="true" /></Link>
          </div>
        </div>

        <div className="hero-orbit" aria-label="The Seed Hub connects people, knowledge and seed diversity">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="seed-core"><Leaf aria-hidden="true" /><span>Seed<br />diversity</span></div>
          <div className="orbit-label orbit-label-one"><Users aria-hidden="true" /> Farmers</div>
          <div className="orbit-label orbit-label-two"><BookOpen aria-hidden="true" /> Knowledge</div>
          <div className="orbit-label orbit-label-three"><Database aria-hidden="true" /> Evidence</div>
        </div>
        <div className="hero-note"><span className="note-number">10</span><span>locally defined pathways towards a resilient seed sector</span></div>
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
          <div><p className="eyebrow">A shared direction</p><h2>Ten pathways. One connected system.</h2></div>
          <p>In 2022, seed-sector stakeholders identified ten practical routes for transformation. They connect policy, local production, quality assurance, research, markets and institutional capacity.</p>
        </div>
        <div className="pathway-grid">
          {pathways.map(({ number, title, icon: Icon }) => (
            <Link href="/pathways" className="pathway-card" key={number}>
              <span className="pathway-number">{number}</span><Icon aria-hidden="true" /><h3>{title}</h3><ArrowRight aria-hidden="true" className="card-arrow" />
            </Link>
          ))}
          <Link href="/pathways" className="pathway-card pathway-card-all">
            <span className="pathway-number">05–10</span><span className="pathway-count">+6</span><h3>See the complete transformation framework</h3><ArrowRight aria-hidden="true" className="card-arrow" />
          </Link>
        </div>
      </section>

      <section className="project-feature">
        <div className="project-panel">
          <p className="eyebrow light">Featured project</p><h2>Plant diversity,<br />managed with farmers.</h2>
          <p>The Benefit-sharing Fund project links participatory management of plant genetic resources with stronger local value chains and better knowledge sharing.</p>
          <Link href="/projects/bsf" className="button button-light">Enter the project space <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="project-workstreams">
          <p className="mini-label">Three connected workstreams</p>
          <ol>
            <li><span>01</span> Adapted PGRFA managed or improved with farmers’ participation</li>
            <li><span>02</span> Local value chains strengthened for production and consumption</li>
            <li><span>03</span> Data, materials and knowledge shared more effectively</li>
          </ol>
          <div className="project-meta"><span><MapPin aria-hidden="true" /> Regional collaboration</span><span><Users aria-hidden="true" /> Multi-partner initiative</span></div>
        </div>
      </section>

      <section className="section knowledge-section">
        <div className="section-heading compact">
          <div><p className="eyebrow">From the knowledge library</p><h2>Ideas grounded in practice.</h2></div>
          <Link href="/knowledge" className="text-link">Browse all resources <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="knowledge-grid">
          {knowledgeItems.map((item) => (
            <article className="knowledge-card" key={item.title}>
              <div className={`knowledge-art ${item.color}`} aria-hidden="true"><span /><Leaf /></div>
              <div className="knowledge-copy"><p>{item.type}</p><h3>{item.title}</h3><span>{item.detail}</span><Link href="/knowledge">Read the story <ArrowRight aria-hidden="true" /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-callout">
        <div><p className="eyebrow light">The Hub grows through participation</p><h2>Bring your evidence,<br />experience or question.</h2></div>
        <div><p>Share a resource, connect with a seed-system expert or help document what is changing in your country.</p><Link href="/contact" className="button button-coral">Contribute to the Hub <ArrowRight aria-hidden="true" /></Link></div>
      </section>

    </main>
  );
}
