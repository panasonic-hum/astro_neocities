// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const reviewCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      type: z.string(),
      year: z.number(),
      shortened: z.string(),
      feel: z.enum(["loved", "liked", "mixed,", "disliked"])
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  reviews2024: reviewCollection
};