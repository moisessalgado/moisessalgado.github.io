import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";


const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tema: z.enum(["filosofia", "historia", "tecnologia", "curiosidades"]),
    draft: z.boolean().default(false),
  }),
});

const projetos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projetos" }),
  schema: z.object({
    nome: z.string(),
    url: z.string().url(),
    descricao: z.string(),
    ordem: z.number().default(100),
  }),
});

export const collections = { blog, projetos };
