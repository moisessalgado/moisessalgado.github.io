import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { TEMAS, getPosts } from '@/lib/blog';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ['/', '/sobre/', '/consultoria/', '/projetos/', '/escritos/', '/en/', '/en/about/', '/en/consulting/'];
  return [
    ...pages.map((p) => ({ url: `${SITE.url}${p}`, lastModified: now, priority: p === '/' ? 1 : 0.7 })),
    ...Object.keys(TEMAS).map((t) => ({ url: `${SITE.url}/temas/${t}/`, lastModified: now, priority: 0.5 })),
    ...getPosts().map((p) => ({ url: `${SITE.url}/escritos/${p.slug}/`, lastModified: new Date(p.date), priority: 0.6 })),
  ];
}
