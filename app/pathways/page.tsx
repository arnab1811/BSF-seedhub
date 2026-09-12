import { PageHero, StatusBadge } from "@/components/interior";
import { contentSource } from "@/lib/content/source";

export default async function PathwaysPage() {
  const pathways = await contentSource.getPathways();
  return (
    <main>
      <PageHero eyebrow="Transformation framework" title="Ten pathways. Designed as a system." intro="Stakeholders endorsed these connected priorities in 2022. Each pathway needs different actors, but progress depends on the relationships between them." meta={<><span>South Sudan</span><span>Stakeholder-defined</span><span>10 pathways</span></>} />
      <section className="pathways-list">
        {pathways.map((pathway) => <article id={pathway.id} className="pathway-row" key={pathway.id}>
          <div className="pathway-row-number">{String(pathway.number).padStart(2,"0")}</div>
          <div><StatusBadge status={pathway.status} /><h2>{pathway.title}</h2><p>{pathway.summary}</p></div>
          <ul>{pathway.priorities.map((priority) => <li key={priority}>{priority}</li>)}</ul>
        </article>)}
      </section>
      <section className="source-note"><p>Framework source</p><h2>Read the original call to action.</h2><a className="button button-coral" href="https://arnab1811.github.io/webtest/call.pdf" target="_blank" rel="noreferrer">Open the policy brief</a></section>
    </main>
  );
}
