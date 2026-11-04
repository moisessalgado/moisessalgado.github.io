import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export const TEMAS = {
  filosofia: 'Filosofia',
  historia: 'História',
  tecnologia: 'Tecnologia',
  curiosidades: 'Curiosidades',
} as const;

export type Tema = keyof typeof TEMAS;

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tema: Tema;
  draft: boolean;
};

export type Post = PostMeta & { content: string };

const DIR = path.join(process.cwd(), 'content', 'blog');

// Drafts are visible in `npm run dev` only.
const showDrafts = process.env.NODE_ENV !== 'production';

function readFile(file: string): Post {
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8');
  const { data, content } = matter(raw);
  const slug = file.replace(/\.(md|mdx)$/, '');
  if (!(data.tema in TEMAS)) {
    throw new Error(`Post "${slug}": tema inválido "${data.tema}". Use: ${Object.keys(TEMAS).join(', ')}`);
  }
  return {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ''),
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
    tema: data.tema as Tema,
    draft: data.draft === true,
    content,
  };
}

function readAll(): Post[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(readFile)
    .filter((p) => showDrafts || !p.draft);
}

export function getPosts(tema?: Tema): PostMeta[] {
  return readAll()
    .filter((p) => !tema || p.tema === tema)
    .map((p): PostMeta => ({
      slug: p.slug, title: p.title, excerpt: p.excerpt, date: p.date, tema: p.tema, draft: p.draft,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  return readAll().find((p) => p.slug === slug) ?? null;
}

export function formatDate(date: string, opts: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' }) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('pt-BR', { ...opts, timeZone: 'UTC' });
}
