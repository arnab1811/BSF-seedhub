import Link from "next/link";
import { ArrowRight, Layers3 } from "lucide-react";
import { PageHero, StatusBadge } from "@/components/interior";
import { contentSource } from "@/lib/content/source";

export default async function ProjectsPage() {
  const projects = await contentSource.getProjects();
  return <main><PageHero eyebrow="Project spaces" title="Initiatives connected to the wider Hub." intro="Each project space brings its activities, learning, resources and team together without turning the Hub into a short-lived project website." />
    <section className="project-list">{projects.map(project => <Link href={`/projects/${project.slug}`} className="project-list-card" key={project.slug}><div className="project-list-icon"><Layers3 aria-hidden="true" /></div><div><StatusBadge status={project.status} /><p>{project.shortName}</p><h2>{project.title}</h2><span>{project.summary}</span></div><ArrowRight className="project-list-arrow" aria-hidden="true" /></Link>)}</section>
    <section className="empty-project-slot"><span>Future project space</span><p>The structure is ready for additional country and regional initiatives.</p></section>
  </main>;
}
