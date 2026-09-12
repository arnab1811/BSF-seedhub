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

const institutions = [
  {
    name: "NARO Plant Genetic Resources Centre",
    location: "Uganda",
    note: "Proposed institutional lead for the renewed regional Hub; confirmation pending.",
  },
  {
    name: "University of Juba",
    location: "South Sudan",
    note: "Founding home of the South Sudan Seed Hub and a participant in the regional dialogue.",
  },
  {
    name: "Alliance of Bioversity International and CIAT",
    location: "Regional",
    note: "Project coordination, seed-systems learning and content development.",
  },
  {
    name: "Wageningen University & Research",
    location: "Netherlands",
    note: "Knowledge support, information architecture and technical development.",
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

      <section className="bsf-about bsf-section" id="about">
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
        <div className="partner-grid">
          {institutions.map((institution) => (
            <article key={institution.name}>
              <MapPin aria-hidden="true" />
              <span>{institution.location}</span>
              <h3>{institution.name}</h3>
              <p>{institution.note}</p>
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
            <h3>Benefit-sharing Fund overview</h3>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="https://www.fao.org/plant-treaty/en/"
            target="_blank"
            rel="noreferrer"
          >
            <span>FAO · International Treaty</span>
            <h3>Plant Genetic Resources for Food and Agriculture</h3>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <Link href="/pathways">
            <span>South Sudan Seed Hub</span>
            <h3>Ten pathways for seed-sector transformation</h3>
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <Link href="/knowledge">
            <span>Regional knowledge library</span>
            <h3>Publications, tools and useful websites</h3>
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
