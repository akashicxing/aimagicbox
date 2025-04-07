import { MetadataRoute } from 'next';
import { Tool } from '@/types';
import tools from '@/data/tools.json';

async function getTools(): Promise<Tool[]> {
  return tools;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://google.com';

  const tools = await getTools();
  const toolUrls = tools.map((tool) => ({
    url: `${baseUrl}/tool/${tool.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  return [
    {
      url: '/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: '/tools',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: '/categories',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: '/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...toolUrls,
  ];
} 