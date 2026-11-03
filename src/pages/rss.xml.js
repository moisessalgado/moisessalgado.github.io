import rss from "@astrojs/rss";
import { getPosts } from "../lib/posts";

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: "Moises Salgado",
    description: "Filosofia, história, tecnologia e curiosidades.",
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/escritos/${p.id}/`,
    })),
    customData: "<language>pt-BR</language>",
  });
}
