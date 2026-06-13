import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, LOCALES } from '../config';

const staticPages = ['', 'about', 'contact', 'privacy'];

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles');
  const urls: string[] = [];

  for (const lang of LOCALES) {
    for (const page of staticPages) {
      const path = page ? `/${lang}/${page}/` : `/${lang}/`;
      urls.push(new URL(path, SITE.url).href);
    }
  }

  for (const article of articles) {
    urls.push(new URL(`/${article.data.lang}/${article.data.permalink}/`, SITE.url).href);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
