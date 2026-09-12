export type ReviewStatus = "published" | "provisional" | "pending-review";

export interface Pathway {
  id: string;
  number: number;
  title: string;
  summary: string;
  priorities: string[];
  status: ReviewStatus;
}

export interface Resource {
  id: string;
  title: string;
  type: "Policy brief" | "Field insight" | "Regional perspective" | "External resource";
  year: number;
  summary: string;
  topics: string[];
  countries: string[];
  url: string;
  external: boolean;
  status: ReviewStatus;
}

export interface Project {
  slug: string;
  shortName: string;
  title: string;
  summary: string;
  status: ReviewStatus;
  workstreams: { number: number; title: string; description: string }[];
}
