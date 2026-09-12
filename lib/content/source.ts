import { bsfProject, organisations, pathways, resources } from "@/content/site-content";

/**
 * Stable content boundary for the prototype. Page components read content through
 * this interface instead of importing storage-specific formats. A future CMS
 * adapter can implement the same methods without redesigning the frontend.
 */
export const contentSource = {
  getPathways: async () => pathways,
  getProjects: async () => [bsfProject],
  getProjectBySlug: async (slug: string) => slug === bsfProject.slug ? bsfProject : null,
  getResources: async () => resources,
  getOrganisations: async () => organisations,
};
