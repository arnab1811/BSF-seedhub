import { BackLink, PageHero, StatusBadge } from "@/components/interior";
import { contentSource } from "@/lib/content/source";
import { BookOpen, Database, Sprout, Users } from "lucide-react";

export default async function BsfProjectPage() {
  const project = await contentSource.getProjectBySlug("bsf");
  if (!project) return null;
  const icons = [Sprout, Users, Database];
  return <main className="bsf-page"><BackLink href="/projects">All projects</BackLink><PageHero eyebrow="Benefit-sharing Fund project" title={project.title} intro={project.summary} meta={<><StatusBadge status={project.status} /><span>Regional collaboration</span></>} />
    <section className="project-overview"><div><p className="eyebrow">The project logic</p><h2>Diversity, livelihoods and knowledge reinforce one another.</h2></div><p>The project is organized around three connected outputs. Together they link farmer participation in managing plant diversity with the local systems that produce, exchange, use and learn from it.</p></section>
    <section className="workstream-grid">{project.workstreams.map((workstream,index) => { const Icon=icons[index]; return <article key={workstream.number}><span>Workstream {String(workstream.number).padStart(2,"0")}</span><Icon aria-hidden="true" /><h2>{workstream.title}</h2><p>{workstream.description}</p></article>; })}</section>
    <section className="project-pending"><BookOpen aria-hidden="true" /><div><p className="mini-label">Content being assembled</p><h2>Activities, field locations and project outputs will appear here.</h2><p>This prototype deliberately distinguishes confirmed public material from information that still requires approval by the project partners.</p></div></section>
  </main>;
}
