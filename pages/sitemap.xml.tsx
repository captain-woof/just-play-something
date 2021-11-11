import { GetServerSidePropsContext } from 'next'

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  // Get base url
  const origin = process.env.NEXT_PUBLIC_APP_ORIGIN

  // Initializing pages with static pages
  const pages = [
    `${origin}`,
    `${origin}/about`
  ]

  // Making the sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
      .map((url) => {
        return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>1.0</priority>
            </url>
          `;
      })
      .join("")}
    </urlset>
  `;

  // Returning sitemap
  res.setHeader("Content-Type", "text/xml")
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

// Blank, because no components must be rendered
export default function Sitemap() { }
