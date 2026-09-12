# Architecture

## Current release

The frontend is a Next.js 16 / TypeScript application built with the Vinext adapter for the managed preview environment. Pages obtain structured content through `lib/content/source.ts`; components do not depend on a specific CMS or database.

The local content adapter is deliberately small. It makes the prototype publishable while the Hub's institutional owner, hosting arrangement and editorial process are still being agreed.

## Intended production architecture

1. Next.js public frontend, self-hosted behind a reverse proxy.
2. A headless CMS such as Directus, running separately from the frontend.
3. PostgreSQL for structured content and CMS accounts.
4. Object storage for documents and approved media.
5. An institutional identity provider or CMS authentication for editors.

The frontend should continue to call a content-source interface. Replace `lib/content/source.ts` with an API-backed adapter that returns the existing types. Avoid importing a CMS SDK throughout page components.

## Authentication boundary

No public login is implemented in the prototype. When introduced, distinguish CMS editors from public or project members. A likely first role set is: administrator, Hub editor, project editor, contributor and reviewer/publisher. Public access should expose published fields only.

## Hosting transition

The application can be served from a Node-compatible host. In production, use HTTPS, a reverse proxy, environment-based secrets, automated backups and separate development/staging/production environments. Do not expose the Next.js process or CMS administration port directly to the internet.
