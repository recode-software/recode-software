import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    slug: z.string(),
    date: z.coerce.date(),
    title: z.string(),
    titlePl: z.string().optional(),
    technologies: z.array(z.string()),
    url: z.string(),
    numberOfScreenshots: z.number().default(0),
    descriptionPl: z.string().optional(),
  })
});

export const collections = {
  projects: projectsCollection
};
