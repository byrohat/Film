# Global Academic Network (GAN) — Landing Page

Single-page marketing site for **Global Academic Network**: private Russian & English
language training, language consulting and global academic guidance.

Built with **Next.js (App Router) + React + Tailwind CSS**, exported as a fully static site.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static output in ./out
```

## Deploying to Render

The repo includes a `render.yaml` blueprint for a **Static Site**:

- Build command: `npm ci && npm run build`
- Publish directory: `out`

In Render: **New → Blueprint** (or **New → Static Site** with the settings above) and select this repo.

### Optional environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used in SEO / Open Graph tags (e.g. a custom domain). Defaults to Render's `RENDER_EXTERNAL_URL`. |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Form endpoint (e.g. Formspree) that receives contact form submissions. Without it, the form only validates and confirms on the client. |

## Structure

```
app/          layout (SEO metadata), page, favicon, OG image, robots, sitemap
components/   one component per section (Header, Hero, Languages, About, Services, …)
lib/site.ts   site URL helper
```

## Content notes

The site intentionally contains no invented statistics, testimonials, partner
universities or student counts. Social links and legal pages in the footer are
placeholders (`#`) until the real URLs are available.
