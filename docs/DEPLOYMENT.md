# Deployment

The current prototype is deployable through the included managed build configuration. A later institutional server can run the public frontend and CMS as separate services.

## Production checklist

1. Confirm the institutional owner, domain registrant and named technical administrator.
2. Configure a staging environment before changing DNS.
3. Store secrets outside Git and rotate initial administrator credentials.
4. Put the frontend and CMS behind HTTPS and a reverse proxy.
5. Restrict the CMS administration surface and apply least-privilege roles.
6. Configure automated database and media backups with a tested restore procedure.
7. Add uptime monitoring, security updates and an editorial support contact.
8. Migrate the existing domain only after redirect and content checks pass.

Environment-specific values belong in deployment settings. Keep `.env.example` synchronized with the keys expected by the application.
