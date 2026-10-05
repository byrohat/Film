// Public site URL. On Render, RENDER_EXTERNAL_URL is provided automatically;
// set NEXT_PUBLIC_SITE_URL once a custom domain is connected.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.RENDER_EXTERNAL_URL ||
  "http://localhost:3000";
