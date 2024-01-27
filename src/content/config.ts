/*
 * Copyright (c) 2024 Simon Hyll
 * All rights reserved.
 *
 * This software and associated documentation files (the "Software") are not open source and are the confidential and proprietary information of Simon Hyll. Use of the Software is strictly prohibited except in compliance with the license agreement between the user and Simon Hyll. This Software may not be copied, modified, distributed, sold, or otherwise transferred without prior written consent from Simon Hyll.
 *
 * NO WARRANTY OF ANY KIND IS EXPRESSED OR IMPLIED. YOU USE THE SOFTWARE AT YOUR OWN RISK. SIMON HYLL IS NOT LIABLE FOR ANY DAMAGES OR LOSSES ARISING FROM THE USE OF THIS SOFTWARE.
 */

import { defineCollection, z } from "astro:content";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        // Make a built-in field required instead of optional.
        description: z.string(),
        // Add a new field to the schema.
        summary: z.string().optional(),
        // Add a new field to the schema.
        character: z.string().optional(),
        // Add a new field to the schema.
        references: z.string().array().optional(),
      }),
    }),
  }),
  i18n: defineCollection({ type: "data", schema: i18nSchema() }),
};
