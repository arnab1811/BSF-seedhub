import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import type { ReviewStatus } from "@/types/content";

export function PageHero({ eyebrow, title, intro, meta }: { eyebrow: string; title: string; intro: string; meta?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="page-hero-lines" aria-hidden="true" />
      <p className="eyebrow light">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro">{intro}</p>
      {meta && <div className="page-meta">{meta}</div>}
    </section>
  );
}

export function StatusBadge({ status }: { status: ReviewStatus }) {
  const label = status === "published" ? "Verified public content" : status === "provisional" ? "Awaiting partner confirmation" : "Pending review";
  return <span className={`status-badge ${status}`}>{label}</span>;
}

export function BackLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="back-link"><ArrowLeft aria-hidden="true" />{children}</Link>;
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="text-link">{children}<ArrowRight aria-hidden="true" /></Link>;
}
