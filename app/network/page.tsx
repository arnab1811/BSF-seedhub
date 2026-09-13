import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/interior";
import { contentSource } from "@/lib/content/source";
import allianceLogo from "@/assets/logos/alliance.svg";
import faoLogo from "@/assets/logos/fao.svg";
import issdLogo from "@/assets/logos/issd-africa.png";
import mafsLogo from "@/assets/logos/mafs.png";
import naroLogo from "@/assets/logos/naro.png";
import universityOfJubaLogo from "@/assets/logos/university-of-juba.png";
import wurLogo from "@/assets/logos/wur.svg";

const organisationMarks: Record<
  string,
  { src: StaticImageData; alt: string; className?: string }
> = {
  uoj: {
    src: universityOfJubaLogo,
    alt: "University of Juba logo",
    className: "organisation-mark-seal",
  },
  mafs: {
    src: mafsLogo,
    alt: "Ministry of Agriculture and Food Security logo",
  },
  dar: {
    src: mafsLogo,
    alt: "Ministry of Agriculture and Food Security logo",
  },
  naro: {
    src: naroLogo,
    alt: "National Agricultural Research Organisation logo",
    className: "organisation-mark-seal",
  },
  fao: {
    src: faoLogo,
    alt: "Food and Agriculture Organization of the United Nations logo",
  },
  wur: {
    src: wurLogo,
    alt: "Wageningen University & Research logo",
  },
  alliance: {
    src: allianceLogo,
    alt: "Alliance of Bioversity International and CIAT logo",
  },
  issd: {
    src: issdLogo,
    alt: "ISSD Africa logo",
  },
};

export default async function NetworkPage() {
  const organisations = await contentSource.getOrganisations();

  return (
    <main>
      <PageHero
        eyebrow="People and institutions"
        title="A Hub is the relationships around it."
        intro="The original Hub brought together government, academia, research, development and seed-sector actors. This public directory adds verified institutional context without pre-assigning ownership of the renewed Hub."
      />
      <section className="network-section">
        <div className="network-intro">
          <p className="eyebrow">Institutional network</p>
          <h2>Organizations connected to the Hub’s formation and knowledge base.</h2>
          <p>
            Each card links to an official institutional page and describes why
            the organization is relevant to this resource. Formal roles in the
            renewed regional Hub and the BSF project remain subject to partner
            confirmation.
          </p>
        </div>
        <div className="organisation-grid">
          {organisations.map((org) => {
            const mark = organisationMarks[org.slug];
            return (
              <article key={org.slug}>
                <div className={`organisation-mark ${mark.className ?? ""}`}>
                  <Image src={mark.src} alt={mark.alt} sizes="180px" />
                </div>
                <p className="organisation-role">{org.role}</p>
                <h3>{org.name}</h3>
                <p className="organisation-summary">{org.summary}</p>
                <div className="organisation-meta">
                  <span><MapPin aria-hidden="true" />{org.location}</span>
                  <a href={org.website} target="_blank" rel="noreferrer">
                    Official page <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="network-values">
        <article><span>01</span><h2>Neutral</h2><p>A space where different interests can be made visible and discussed constructively.</p></article>
        <article><span>02</span><h2>Plural</h2><p>Formal, intermediary and farmer-managed seed systems all belong in the conversation.</p></article>
        <article><span>03</span><h2>Locally led</h2><p>Regional exchange should support rather than displace national and community ownership.</p></article>
      </section>
    </main>
  );
}
