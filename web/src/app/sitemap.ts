import { MetadataRoute } from 'next';
import { Tool } from '@/types';
import tools from '@/data/tools.json';

async function getTools(): Promise<Tool[]> {
  return tools;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://aimagicbox.online'
    : process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://aimagicbox.online'; // 默认使用生产环境 URL

  const tools = await getTools();
  const toolUrls = tools.map((tool) => ({
    url: `${baseUrl}/tool/${tool.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...toolUrls,
  ];
} 