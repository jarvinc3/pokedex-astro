import { defineCollection, z } from "astro:content";

export const pokemon = defineCollection({
   type: "data",
   schema: z.object({
      id: z.number(),
      name: z.string(),
      height: z.number(),
      weight: z.number(),
      types: z.array(z.string()),
      abilities: z.array(z.string()),
      stats: z.array(
         z.object({
            stat: z.object({
               name: z.string(),
            }),
            base_stat: z.number(),
         })
      ),
      sprites: z.object({
         front_default: z.string().url(),
         back_default: z.string().url(),
      }),
      moves: z.array(z.string()),
   }),
});
