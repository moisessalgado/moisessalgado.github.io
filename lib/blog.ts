import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  published: boolean;
};

export type Post = PostMeta & { content: string };

const DIR = path.join(process.cwd(), 'content', 'blog');

// Posts with `status: publicado` go live. Anything else is a draft, visible in `npm run dev` only.
const showDrafts = process.env.NODE_ENV !== 'production';

function readFile(file: string): Post {
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8');
  const { data, content } = matter(raw);
  const slug = file.replace(/\.(md|mdx)$/, '');
  return {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ''),
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? new Date().toISOString().slice(0, 10)),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    published: ['publicado', 'published'].includes(String(data.status ?? '').toLowerCase()),
    content,
  };
}

function readAll(): Post[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => !f.startsWith('_') && (f.endsWith('.md') || f.endsWith('.mdx')))
    .map(readFile)
    .filter((p) => showDrafts || p.published);
}

export function getPosts(): PostMeta[] {
  return readAll()
    .map((p): PostMeta => ({
      slug: p.slug, title: p.title, excerpt: p.excerpt, date: p.date, tags: p.tags, published: p.published,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  return readAll().find((p) => p.slug === slug) ?? null;
}

export function formatDate(date: string, opts: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' }) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('pt-BR', { ...opts, timeZone: 'UTC' });
}
