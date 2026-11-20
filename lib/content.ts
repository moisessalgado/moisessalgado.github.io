import fs from 'node:fs';
import path from 'node:path';

export type SiteSection = { fields: Record<string, string>; body: string };
export type SiteContent = Record<string, SiteSection>;

const DIR = path.join(process.cwd(), 'content');

// Parses content/site*.md: "## name" sections, "key: value" lines up to the first blank line, then a Markdown body.
export function getSite(locale: 'pt' | 'en' = 'pt'): SiteContent {
  const raw = fs.readFileSync(path.join(DIR, locale === 'pt' ? 'site.md' : 'site.en.md'), 'utf8');
  const text = raw.replace(/<!--[\s\S]*?-->/g, '');
  const out: SiteContent = {};
  for (const chunk of text.split(/^## +/m).slice(1)) {
    const [head, ...rest] = chunk.split('\n');
    const lines = rest.join('\n').replace(/^\s*\n/, '').split('\n');
    const fields: Record<string, string> = {};
    let i = 0;
    for (; i < lines.length; i++) {
      const m = /^(\w+):\s*(.*)$/.exec(lines[i]);
      if (!m) break;
      fields[m[1]] = m[2].trim();
    }
    out[head.trim()] = { fields, body: lines.slice(i).join('\n').trim() };
  }
  return out;
}
