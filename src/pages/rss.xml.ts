import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export const get = async (context) => {
        const posts = await getCollection("blog");
        return rss({
                title: `AxOS`,
                description: "AxOS - The Linux experience, enhanced.",
                site: context.site,
                items: posts.map((post) => ({
                        link: post.slug,
                        title: post.data.title,
                        description: post.data.snippet,
                        pubDate: post.data.publishDate,
                })),
        });
};
