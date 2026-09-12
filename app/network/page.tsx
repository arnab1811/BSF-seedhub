import { Building2, MapPin } from "lucide-react";
import { PageHero } from "@/components/interior";
import { contentSource } from "@/lib/content/source";

export default async function NetworkPage() {
  const organisations = await contentSource.getOrganisations();
  return <main><PageHero eyebrow="People and institutions" title="A Hub is the relationships around it." intro="The original Hub brought together government, academia, research, development and seed-sector actors. The renewed platform is designed to make those relationships visible and useful." />
    <section className="network-section"><div className="network-intro"><p className="eyebrow">Institutional network</p><h2>Organizations associated with the Hub’s formation and knowledge base.</h2><p>This is an initial public-content inventory. Formal roles in the renewed regional Hub and the BSF project still require partner confirmation.</p></div><div className="organisation-grid">{organisations.map(org => <article key={org.name}><Building2 aria-hidden="true" /><p>{org.role}</p><h3>{org.name}</h3><span><MapPin aria-hidden="true" />{org.location}</span></article>)}</div></section>
    <section className="network-values"><article><span>01</span><h2>Neutral</h2><p>A space where different interests can be made visible and discussed constructively.</p></article><article><span>02</span><h2>Plural</h2><p>Formal, intermediary and farmer-managed seed systems all belong in the conversation.</p></article><article><span>03</span><h2>Locally led</h2><p>Regional exchange should support rather than displace national and community ownership.</p></article></section>
  </main>;
}
