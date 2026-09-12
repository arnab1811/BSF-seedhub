import { ArrowUpRight, FileText, Search } from "lucide-react";
import { PageHero } from "@/components/interior";
import { contentSource } from "@/lib/content/source";

export default async function KnowledgePage() {
  const resources = await contentSource.getResources();
  return <main><PageHero eyebrow="Knowledge library" title="Evidence that can travel." intro="Policy briefs, field insights, project learning and practical resources for people strengthening seed systems." />
    <section className="library-shell"><div className="library-toolbar"><label><Search aria-hidden="true" /><span className="sr-only">Search</span><input placeholder="Search titles, topics or countries" disabled aria-describedby="search-note" /></label><p id="search-note">Search and filters will become active when the content service is connected.</p></div>
      <div className="resource-list">{resources.map(resource => <a href={resource.url} target={resource.external ? "_blank" : undefined} rel={resource.external ? "noreferrer" : undefined} className="resource-row" key={resource.id}><div className="resource-icon"><FileText aria-hidden="true" /></div><div><p>{resource.type} · {resource.year}</p><h2>{resource.title}</h2><span>{resource.summary}</span><div className="tag-list">{resource.topics.map(topic => <em key={topic}>{topic}</em>)}{resource.countries.map(country => <em key={country}>{country}</em>)}</div></div><ArrowUpRight className="resource-arrow" aria-hidden="true" /></a>)}</div>
    </section>
  </main>;
}
