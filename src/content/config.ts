import { defineCollection, z } from "astro:content";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { rssSchema } from "@astrojs/rss";

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        // Make a built-in field required instead of optional.
        description: z.string(),
        // Add a new field to the schema.
        references: z.string().array().optional(),
      }),
    }),
  }),
  i18n: defineCollection({ type: "data", schema: i18nSchema() }),
};
