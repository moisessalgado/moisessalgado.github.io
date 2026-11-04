import { getPosts } from '@/lib/blog';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function GET() {
  const items = getPosts()
    .map(
      (p) => `<item>
<title>${esc(p.title)}</title>
<link>${SITE.url}/escritos/${p.slug}/</link>
<guid>${SITE.url}/escritos/${p.slug}/</guid>
<pubDate>${new Date(`${p.date}T00:00:00Z`).toUTCString()}</pubDate>
<description>${esc(p.excerpt)}</description>
</item>`,
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>${SITE.name}</title>
<link>${SITE.url}/</link>
<description>Filosofia, história, tecnologia e curiosidades.</description>
<language>pt-BR</language>
${items}
</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
