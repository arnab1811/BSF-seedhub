import { ArrowLink, PageHero } from "@/components/interior";

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About the Hub" title="A neutral space for a seed sector in motion." intro="The South Sudan Seed Hub connects seed actors who want farmers to access quality seed of appropriate varieties—reliably, affordably and even under difficult conditions." />
      <section className="content-layout">
        <aside className="content-index"><span>On this page</span><a href="#origin">Origin</a><a href="#purpose">Purpose</a><a href="#regional">Regional direction</a></aside>
        <div className="prose-content">
          <section id="origin"><p className="section-number">01 · Origin</p><h2>Created through dialogue, not in isolation.</h2><p>The Hub emerged from a multi-stakeholder event hosted at the University of Juba in September 2022. Government, research, humanitarian, development, private-sector and farmer-facing organizations examined the country’s informal, intermediary and formal seed systems together.</p><p>That process produced ten linked pathways for a robust, inclusive, sustainable and resilient seed sector. The Hub became a place to keep those conversations, priorities and materials accessible.</p></section>
          <section id="purpose"><p className="section-number">02 · Purpose</p><h2>Knowledge is useful when it helps people coordinate.</h2><div className="purpose-grid"><article><strong>Share</strong><p>Make evidence, tools, field experience and policy materials easier to find.</p></article><article><strong>Connect</strong><p>Bring public, community, research, humanitarian and commercial actors into dialogue.</p></article><article><strong>Learn</strong><p>Document what works, what fails and what needs adapting in fragile contexts.</p></article><article><strong>Act</strong><p>Translate shared analysis into practical priorities, partnerships and policy directions.</p></article></div></section>
          <section id="regional"><p className="section-number">03 · Regional direction</p><h2>Rooted in South Sudan. Open to regional learning.</h2><p>Seed systems do not stop at national borders. Varieties, knowledge, markets, shocks and institutional relationships move across the region. The renewed Hub is therefore designed to retain its South Sudan foundation while hosting project spaces and learning from neighbouring countries.</p><blockquote>Local ownership remains essential. Regional exchange makes it stronger.</blockquote><ArrowLink href="/network">Explore the Hub network</ArrowLink></section>
        </div>
      </section>
    </main>
  );
}
