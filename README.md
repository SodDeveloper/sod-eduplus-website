# sodeduplus.com website

Marketing site for SOD EduPlus, the innovative school ERP. Next.js static export (`output: "export"`).

- `npm ci && npm run build` → static site in `out/` (root build for sodeduplus.com / Hostinger).
- GitHub Pages preview: `PAGES_BASE_PATH=/sod-eduplus-website` (set in `.github/workflows/pages.yml`).
- Lead forms and demo logins are configured via build-time env vars; see `.env.example`. Never commit real credentials.
