import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Database,
  Mail,
  MapPin,
  Sprout,
  Users,
} from "lucide-react";
import { BackLink, PageHero, StatusBadge } from "@/components/interior";
import { contentSource } from "@/lib/content/source";
import communityImage from "@/assets/community-seed-exchange.webp";
import botanicalImage from "@/assets/pgrfa-botanical.webp";
import allianceLogo from "@/assets/logos/alliance.svg";
import faoLogo from "@/assets/logos/fao.svg";
import naroLogo from "@/assets/logos/naro.png";
import universityOfJubaLogo from "@/assets/logos/university-of-juba.png";
import wurLogo from "@/assets/logos/wur.svg";

const institutions = [
  {
    name: "NARO Plant Genetic Resources Centre",
    location: "Uganda",
    logo: naroLogo,
    logoAlt: "National Agricultural Research Organisation logo",
    note: "Proposed institutional lead for the renewed regional Hub; confirmation pending.",
    profile:
      "The Uganda National Genebank is part of NARO-PGRC. Its documented mandate covers conservation, management and sustainable use of Uganda’s PGRFA.",
    website:
      "https://www.croptrust.org/knowledge-hub/partners/genebank/national-agricultural-research-organization-naro/",
    sourceLabel: "Verified genebank profile",
  },
  {
    name: "University of Juba",
    location: "South Sudan",
    logo: universityOfJubaLogo,
    logoAlt: "University of Juba logo",
    note: "Participant in the regional Hub dialogue; its future formal role remains to be confirmed.",
    profile:
      "Established in 1975, the University describes teaching, research, innovation and service to the community as central to its direction.",
    website: "https://uoj.edu.ss/",
    sourceLabel: "Visit the University",
  },
  {
    name: "Alliance of Bioversity International and CIAT",
    location: "Regional",
    logo: allianceLogo,
    logoAlt: "Alliance of Bioversity International and CIAT logo",
    note: "Project coordination, seed-systems learning and content development.",
    profile:
      "The CGIAR Research Centre works at the intersection of agricultural biodiversity and food systems, with dedicated agrobiodiversity research and genebanks.",
    website: "https://alliancebioversityciat.org/",
    sourceLabel: "Explore the Alliance",
  },
  {
    name: "Wageningen University & Research",
    location: "Netherlands",
    logo: wurLogo,
    logoAlt: "Wageningen University & Research logo",
    note: "Knowledge support, information architecture and technical development.",
    profile:
      "WUR combines education and research on climate, biodiversity, food and nutrition, and the living environment.",
    website: "https://www.wur.nl/",
    sourceLabel: "Visit WUR",
  },
];

const updates = [
  {
    date: "August 2026",
    type: "Project update",
    title: "Team agrees to develop the BSF space within the regional Seed Hub",
    text: "The project team endorsed a shared sub-hub rather than creating a separate project website.",
  },
  {
    date: "August 2026",
    type: "Mid-term review",
    title: "Project partners meet in Entebbe",
    text: "The review brought the team together to consider progress, content priorities and the next phase of collaboration.",
  },
  {
    date: "Under discussion",
    type: "Hub governance",
    title: "Long-term ownership and hosting",
    text: "Partners are considering which institution can lead the regional Hub and sustain its hosting, editorial and maintenance arrangements.",
  },
];

const contacts = [
  {
    name: "Ronnie Vernooy",
    organisation: "Alliance of Bioversity International and CIAT",
    focus: "Project coordination and content",
    email: "r.vernooy@cgiar.org",
  },
  {
    name: "Arnab Gupta",
    organisation: "Wageningen University & Research",
    focus: "Sub-hub structure and technical development",
    email: "arnab.gupta@wur.nl",
  },
];

export default async function BsfProjectPage() {
  const project = await contentSource.getProjectBySlug("bsf");
  if (!project) return null;
  const icons = [Sprout, Users, Database];

  return (
    <main className="bsf-page">
      <BackLink href="/projects">Regional Hub / Project spaces</BackLink>
      <PageHero
        eyebrow="Benefit-sharing Fund project · project sub-hub"
        title={project.title}
        intro={project.summary}
        meta={
          <>
            <StatusBadge status={project.status} />
            <span>Regional collaboration</span>
          </>
        }
      />

      <nav className="bsf-subnav" aria-label="BSF project sections">
        <span>Inside this project</span>
        <a href="#about">About us</a>
        <a href="#activities">Activities</a>
        <a href="#news">News & publications</a>
        <a href="#resources">Resources</a>
        <a href="#team">Contact the team</a>
      </nav>

      <section className="bsf-image-intro" id="about">
        <div className="bsf-image-wrap"><Image src={communityImage} alt="Community members working together with diverse crop seed" fill priority sizes="(max-width: 900px) 100vw, 58vw" /></div>
        <div className="bsf-image-copy"><span>01 — About the project</span><h2>Plant diversity becomes resilience when farmers can manage, use and share it.</h2><p>The project connects locally adapted plant genetic resources with livelihoods, food culture and practical learning across partner countries.</p></div>
      </section>

      <section className="bsf-about bsf-section">
        <div className="bsf-section-heading">
          <p className="section-number">01 · About us</p>
          <h2>The BSF project and its partners</h2>
          <p>
            This project space brings together the work, learning and public
            resources of a regional initiative focused on plant genetic
            resources for food and agriculture. It sits within the wider Seed
            Hub so that project results remain connected to longer-term
            seed-system learning.
          </p>
        </div>
        <div className="bsf-about-note">
          <span>Regional foundation</span>
          <p>
            The Hub builds on earlier Netherlands-supported collaboration
            involving South Sudan, Sudan and Somaliland. The current BSF
            partner roster and country-level focal points will be completed
            after formal confirmation by the project team.
          </p>
        </div>

        <aside className="bsf-evidence" aria-labelledby="bsf-evidence-title">
          <div className="bsf-evidence-logo">
            <Image
              src={faoLogo}
              alt="Food and Agriculture Organization of the United Nations"
              sizes="220px"
            />
          </div>
          <div className="bsf-evidence-copy">
            <p className="section-number">Official programme context</p>
            <h3 id="bsf-evidence-title">
              The Benefit-sharing Fund is part of the International Treaty’s
              Funding Strategy.
            </h3>
            <p>
              FAO describes the Fund as the operational mechanism for monetary
              benefits arising from the Treaty’s Multilateral System and as a
              catalyst for international cooperation on PGRFA.
            </p>
          </div>
          <div className="bsf-evidence-facts" aria-label="Benefit-sharing Fund facts">
            <span><strong>2009</strong> operational since</span>
            <span><strong>67</strong> developing countries supported</span>
            <span><strong>4</strong> project cycles reported by FAO</span>
          </div>
          <a
            href="https://www.fao.org/plant-treaty/areas-of-work/benefit-sharing-fund/bsf-overview/en/"
            target="_blank"
            rel="noreferrer"
          >
            Read the official overview <ArrowUpRight aria-hidden="true" />
          </a>
        </aside>

        <div className="partner-grid">
          {institutions.map((institution) => (
            <article key={institution.name}>
              <div className="partner-mark">
                <Image
                  src={institution.logo}
                  alt={institution.logoAlt}
                  sizes="(max-width: 720px) 160px, 180px"
                />
              </div>
              <span><MapPin aria-hidden="true" />{institution.location}</span>
              <h3>{institution.name}</h3>
              <p className="partner-role">{institution.note}</p>
              <p>{institution.profile}</p>
              <a href={institution.website} target="_blank" rel="noreferrer">
                {institution.sourceLabel} <ArrowUpRight aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <p className="content-caveat">
          Working institutional list based on the current Hub discussions.
          Formal project roles remain subject to partner confirmation.
        </p>
      </section>

      <section className="bsf-activities bsf-section" id="activities">
        <div className="bsf-section-heading light-heading">
          <p className="section-number">02 · Activities</p>
          <h2>Three connected areas of work</h2>
          <p>
            The activity structure follows the three outputs of the
            Benefit-sharing Fund project framework.
          </p>
        </div>
        <div className="bsf-activity-list">
          {project.workstreams.map((workstream, index) => {
            const Icon = icons[index];
            return (
              <article key={workstream.number}>
                <div className="activity-number">
                  {String(workstream.number).padStart(2, "0")}
                </div>
                <Icon aria-hidden="true" />
                <div>
                  <p>Activity area {workstream.number}</p>
                  <h3>{workstream.title}</h3>
                  <span>{workstream.description}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bsf-botanical">
        <div><p className="eyebrow">PGRFA in focus</p><h2>Many crops.<br />One living system.</h2><p>The project space brings together field activities, partner publications, news and links to useful external resources.</p></div>
        <div className="botanical-frame"><Image src={botanicalImage} alt="Botanical illustration of sorghum, millet, cowpea, groundnut and beans" fill sizes="(max-width: 900px) 100vw, 55vw" /></div>
      </section>

      <section className="bsf-section bsf-news" id="news">
        <div className="bsf-section-heading">
          <p className="section-number">03 · News and publications</p>
          <h2>Project progress and shared learning</h2>
          <p>
            Meeting updates, field stories and publications will be added here
            as they are reviewed by the project partners.
          </p>
        </div>
        <div className="update-grid">
          {updates.map((update) => (
            <article key={update.title}>
              <div>
                <CalendarDays aria-hidden="true" />
                <span>{update.date}</span>
              </div>
              <p>{update.type}</p>
              <h3>{update.title}</h3>
              <span>{update.text}</span>
            </article>
          ))}
        </div>
        <div className="publication-band">
          <BookOpen aria-hidden="true" />
          <div>
            <p>Publication collection</p>
            <h3>Reports, briefs and field materials</h3>
            <span>
              The collection will grow as partners approve project outputs for
              public release.
            </span>
          </div>
          <Link href="/knowledge">
            Browse Hub knowledge <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bsf-section bsf-resources" id="resources">
        <div className="bsf-section-heading">
          <p className="section-number">04 · Resources</p>
          <h2>Useful starting points</h2>
          <p>
            Project materials will sit alongside selected resources from FAO,
            project institutions and seed-system allies.
          </p>
        </div>
        <div className="bsf-resource-list">
          <a
            href="https://www.fao.org/plant-treaty/areas-of-work/benefit-sharing-fund/bsf-overview/en/"
            target="_blank"
            rel="noreferrer"
          >
            <span>FAO · Official resource</span>
            <div><h3>Benefit-sharing Fund overview</h3><p>The Fund’s role, governance, project cycles and results.</p></div>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="https://glis.fao.org/"
            target="_blank"
            rel="noreferrer"
          >
            <span>FAO · Global information</span>
            <div><h3>Global Information System for PGRFA</h3><p>A global entry point for information and knowledge on conserved plant genetic resources.</p></div>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="https://bold.croptrust.org/genebanks/uganda/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Crop Trust · Partner profile</span>
            <div><h3>Uganda National Genebank</h3><p>Mandate, collections, community seed-bank links and PGRFA services at NARO-PGRC.</p></div>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="https://research.uoj.edu.ss/"
            target="_blank"
            rel="noreferrer"
          >
            <span>University of Juba · Research</span>
            <div><h3>Research publications repository</h3><p>Publications, projects and research collaboration from the University’s schools and institutes.</p></div>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <Link href="/pathways">
            <span>South Sudan Seed Hub</span>
            <div><h3>Ten pathways for seed-sector transformation</h3><p>The Hub’s agenda for policy, seed quality, genebanks, breeding and institutional capacity.</p></div>
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <Link href="/knowledge">
            <span>Regional knowledge library</span>
            <div><h3>Publications, tools and useful websites</h3><p>A growing, source-checked collection for project teams and seed-system stakeholders.</p></div>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bsf-section bsf-team" id="team">
        <div className="bsf-section-heading light-heading">
          <p className="section-number">05 · Contact the team</p>
          <h2>Project contact points</h2>
          <p>
            These contacts reflect the current coordination and technical
            discussions. Additional country and institutional focal points will
            be added after confirmation.
          </p>
        </div>
        <div className="team-grid">
          {contacts.map((contact) => (
            <article key={contact.email}>
              <Users aria-hidden="true" />
              <p>{contact.focus}</p>
              <h3>{contact.name}</h3>
              <span>{contact.organisation}</span>
              <a href={`mailto:${contact.email}`}>
                <Mail aria-hidden="true" />
                {contact.email}
              </a>
            </article>
          ))}
          <article className="team-pending">
            <Database aria-hidden="true" />
            <p>Partner focal points</p>
            <h3>Country team contacts</h3>
            <span>
              NARO-PGRC, University of Juba and other project partner contacts
              will be listed after approval.
            </span>
          </article>
        </div>
      </section>
    </main>
  );
}
