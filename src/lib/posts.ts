import { getCollection } from "astro:content";

export const TEMAS = {
  filosofia: "Filosofia",
  historia: "História",
  tecnologia: "Tecnologia",
  curiosidades: "Curiosidades",
} as const;

export type Tema = keyof typeof TEMAS;

export async function getPosts() {
  const posts = await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const fmtDate = (d: Date) =>
  d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" });
