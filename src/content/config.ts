import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'de', 'es', 'ja', 'th']),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    permalink: z.string(),
    /** 对应其他语言版本的 permalink，用于 hreflang */
    alternates: z
      .object({
        en: z.string().optional(),
        de: z.string().optional(),
        es: z.string().optional(),
        ja: z.string().optional(),
        th: z.string().optional(),
      })
      .optional(),
    keywords: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
