import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { getPosts } from '@/lib/blog';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ['/', '/blog/', '/en/'];
  return [
    ...pages.map((p) => ({ url: `${SITE.url}${p}`, lastModified: now, priority: p === '/' ? 1 : 0.7 })),
    ...getPosts().map((p) => ({ url: `${SITE.url}/blog/${p.slug}/`, lastModified: new Date(p.date), priority: 0.6 })),
  ];
}
