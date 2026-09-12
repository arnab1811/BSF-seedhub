import Link from "next/link";
import { ArrowRight, CalendarDays, Search, Sprout } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="South Sudan Seed Hub home">
        <span className="brand-mark"><Sprout aria-hidden="true" /></span>
        <span><strong>South Sudan</strong><small>Seed Hub</small></span>
      </Link>
      <nav aria-label="Main navigation" className="main-nav">
        <Link href="/about">About</Link><Link href="/pathways">Pathways</Link>
        <Link href="/projects">Projects</Link><Link href="/knowledge">Knowledge</Link>
        <Link href="/network">Network</Link>
      </nav>
      <div className="header-actions">
        <Link href="/knowledge" className="icon-link" aria-label="Search the knowledge library"><Search aria-hidden="true" /></Link>
        <Link href="/contact" className="button button-small">Contribute <ArrowRight aria-hidden="true" /></Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link href="/" className="brand footer-brand">
        <span className="brand-mark"><Sprout aria-hidden="true" /></span>
        <span><strong>South Sudan</strong><small>Seed Hub</small></span>
      </Link>
      <p>A neutral space for knowledge sharing, joint learning and seed-system transformation.</p>
      <div className="footer-links"><Link href="/about">About</Link><Link href="/knowledge">Resources</Link><Link href="/contact">Contact</Link></div>
      <span className="footer-status"><CalendarDays aria-hidden="true" /> Working prototype · 2026</span>
    </footer>
  );
}
