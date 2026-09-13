import Image from "next/image";
import Link from "next/link";
import { BackLink, PageHero, StatusBadge } from "@/components/interior";
import { contentSource } from "@/lib/content/source";
import { ArrowUpRight, BookOpen, CalendarDays, Database, Mail, MapPin, Sprout, Users } from "lucide-react";
import communityImage from "@/assets/community-seed-exchange.webp";
import botanicalImage from "@/assets/pgrfa-botanical.webp";

const institutions = [
  ["NARO Plant Genetic Resources Centre", "Uganda", "Proposed institutional lead for the renewed regional Hub; confirmation pending."],
  ["University of Juba", "South Sudan", "Founding home of the South Sudan Seed Hub and a participant in the regional dialogue."],
  ["Alliance of Bioversity International and CIAT", "Regional", "Project coordination, seed-systems learning and content development."],
  ["Wageningen University & Research", "Netherlands", "Knowledge support, information architecture and technical development."],
];

const updates = [
  ["August 2026", "Project update", "Team agrees to develop the BSF space within the regional Seed Hub"],
  ["August 2026", "Mid-term review", "Project partners meet in Entebbe"],
  ["Under discussion", "Hub governance", "Long-term ownership and hosting"],
];

export default async function BsfProjectPage() {
  const project = await contentSource.getProjectBySlug("bsf");
  if (!project) return null;
  const icons = [Sprout, Users, Database];
  return <main className="bsf-page"><BackLink href="/projects">All projects</BackLink><PageHero eyebrow="Benefit-sharing Fund project" title={project.title} intro={project.summary} meta={<><StatusBadge status={project.status} /><span>Regional collaboration</span></>} />
    <nav className="bsf-subnav" aria-label="BSF project sections"><span>Inside this project</span><a href="#about">About us</a><a href="#activities">Activities</a><a href="#news">News & publications</a><a href="#resources">Resources</a><a href="#team">Contact the team</a></nav>
    <section className="bsf-image-intro" id="about">
      <div className="bsf-image-wrap"><Image src={communityImage} alt="Community members working together with diverse crop seed" fill priority sizes="(max-width: 900px) 100vw, 58vw" /></div>
      <div className="bsf-image-copy"><span>01 — About the project</span><h2>Plant diversity becomes resilience when farmers can manage, use and share it.</h2><p>The project connects locally adapted plant genetic resources with livelihoods, food culture and practical learning across partner countries.</p></div>
    </section>
    <section className="project-overview"><div><p className="eyebrow">The project logic</p><h2>Diversity, livelihoods and knowledge reinforce one another.</h2></div><p>The project is organized around three connected outputs. Together they link farmer participation in managing plant diversity with the local systems that produce, exchange, use and learn from it.</p></section>
    <section className="partner-grid">{institutions.map(([name,location,note]) => <article key={name}><MapPin aria-hidden="true" /><span>{location}</span><h3>{name}</h3><p>{note}</p></article>)}</section>
    <section className="workstream-grid" id="activities">{project.workstreams.map((workstream,index) => { const Icon=icons[index]; return <article key={workstream.number}><span>Workstream {String(workstream.number).padStart(2,"0")}</span><span className="workstream-icon"><Icon aria-hidden="true" /></span><h2>{workstream.title}</h2><p>{workstream.description}</p></article>; })}</section>
    <section className="bsf-botanical">
      <div><p className="eyebrow">PGRFA in focus</p><h2>Many crops.<br />One living system.</h2><p>The project space will bring together field activities, partner publications, news and links to useful external resources.</p></div>
      <div className="botanical-frame"><Image src={botanicalImage} alt="Botanical illustration of sorghum, millet, cowpea, groundnut and beans" fill sizes="(max-width: 900px) 100vw, 55vw" /></div>
    </section>
    <section className="bsf-news" id="news"><div className="bsf-section-heading"><p className="section-number">03 · News and publications</p><h2>Project progress and shared learning</h2><p>Meeting updates, field stories and publications will be added here as they are reviewed by the project partners.</p></div><div className="update-grid">{updates.map(([date,type,title]) => <article key={title}><CalendarDays aria-hidden="true" /><span>{date}</span><p>{type}</p><h3>{title}</h3></article>)}</div></section>
    <section className="bsf-resources" id="resources"><div className="bsf-section-heading"><p className="section-number">04 · Resources</p><h2>Useful starting points</h2><p>Project materials sit alongside selected resources from FAO, project institutions and seed-system allies.</p></div><div className="bsf-resource-list"><a href="https://www.fao.org/plant-treaty/areas-of-work/benefit-sharing-fund/bsf-overview/en/" target="_blank" rel="noreferrer"><span>FAO · Official resource</span><h3>Benefit-sharing Fund overview</h3><ArrowUpRight /></a><a href="https://www.fao.org/plant-treaty/en/" target="_blank" rel="noreferrer"><span>FAO · International Treaty</span><h3>Plant Genetic Resources for Food and Agriculture</h3><ArrowUpRight /></a><Link href="/knowledge"><span>Regional knowledge library</span><h3>Publications, tools and useful websites</h3><ArrowUpRight /></Link></div></section>
    <section className="bsf-team" id="team"><div className="bsf-section-heading"><p className="section-number">05 · Contact the team</p><h2>Project contact points</h2><p>Additional country and institutional focal points will be added after confirmation.</p></div><div className="team-grid"><article><Users /><p>Project coordination and content</p><h3>Ronnie Vernooy</h3><span>Alliance of Bioversity International and CIAT</span><a href="mailto:r.vernooy@cgiar.org"><Mail /> r.vernooy@cgiar.org</a></article><article><Users /><p>Structure and technical development</p><h3>Arnab Gupta</h3><span>Wageningen University & Research</span><a href="mailto:arnab.gupta@wur.nl"><Mail /> arnab.gupta@wur.nl</a></article><article className="team-pending"><Database /><p>Partner focal points</p><h3>Country team contacts</h3><span>To be listed after partner approval.</span></article></div></section>
    <section className="project-pending"><BookOpen aria-hidden="true" /><div><p className="mini-label">A growing project space</p><h2>Project outputs will grow here as partners approve them.</h2><p>This prototype deliberately distinguishes confirmed public material from information that still requires approval by the project partners.</p></div></section>
  </main>;
}
