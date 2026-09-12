# South Sudan Seed Hub

A modern, mobile-first knowledge and collaboration website for resilient seed systems. The current release is a structured public prototype. It intentionally keeps unconfirmed project details marked as provisional and does not simulate login, moderation or publishing workflows before institutional ownership is agreed.

## Local development

Requirements: Node.js 22.13+ and pnpm.

```bash
pnpm install
pnpm dev
```

For a production build:

```bash
pnpm build
```

## Repository structure

- `app/` — routes, metadata and the shared visual system
- `components/` — reusable site chrome and interface patterns
- `content/` — reviewed prototype content
- `lib/content/` — storage-independent content access layer
- `types/` — CMS-ready TypeScript content contracts
- `docs/` — architecture, content model, deployment and handover notes
- `.github/workflows/` — automated quality checks

## Content status

Every structured content record carries a review status: `published`, `provisional`, or `pending-review`. Public claims should not be promoted to `published` until their source and partner approval are recorded.

See [ARCHITECTURE.md](docs/ARCHITECTURE.md) and [CONTENT_MODEL.md](docs/CONTENT_MODEL.md) before connecting a CMS.
