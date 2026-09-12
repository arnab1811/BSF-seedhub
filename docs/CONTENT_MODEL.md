# Content model

The prototype defines three typed entities: `Pathway`, `Project` and `Resource`. The first CMS migration should preserve their identifiers and route slugs.

## Recommended CMS collections

- `projects`: title, short name, slug, summary, dates, countries, partners, status
- `workstreams`: project relation, number, title, description, lead, outputs
- `pathways`: number, title, summary, priorities, source, review status
- `resources`: title, abstract, file/link, year, type, topics, countries, language, rights
- `stories`: title, slug, standfirst, body, authors, hero media, publication date
- `events`: title, date, location, description, project, materials
- `organisations`: name, logo, country, role, URL, approval status
- `people`: name, role, organization, expertise, biography, contact visibility
- `locations`, `crops`, `topics`: reusable controlled vocabularies

## Editorial states

Use at least draft, in review, approved, published and archived. The current frontend simplifies this to published, provisional and pending review. The CMS adapter should only return published records to unauthenticated visitors.

## Media governance

Record creator/source, rights or licence, caption, alt text, consent status and permitted channels for each image or video. Do not migrate downloaded web imagery without verifying reuse rights.
