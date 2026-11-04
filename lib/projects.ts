import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type Project = { slug: string; nome: string; url: string; descricao: string; ordem: number };

const DIR = path.join(process.cwd(), 'content', 'projetos');

export function getProjects(): Project[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f): Project => {
      const { data } = matter(fs.readFileSync(path.join(DIR, f), 'utf8'));
      return {
        slug: f.replace(/\.md$/, ''),
        nome: String(data.nome),
        url: String(data.url),
        descricao: String(data.descricao ?? ''),
        ordem: Number(data.ordem ?? 100),
      };
    })
    .sort((a, b) => a.ordem - b.ordem);
}
