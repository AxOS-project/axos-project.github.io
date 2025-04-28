
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
	loader: glob({ pattern: "**\/[^_]*.{md,mdx}", base: "./src/content/blog" }),
	schema: z.object({
		draft: z.boolean(),
		title: z.string(),
		snippet: z.string(),
		image: z.object({
			src: z.string(),
			alt: z.string(),
		}),
		publishDate: z.string().transform((str) => new Date(str)),
		author: z.string().default("Ardox"),
		category: z.string(),
		tags: z.array(z.string()),
	}),
});


export const collections =  { blog: blogCollection }
