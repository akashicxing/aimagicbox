import { tools } from '@/data/tools';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://aimagicbox.online';
  
  // 工具页面 - 每周更新
  const toolsUrls = tools.map((tool) => ({
    url: new URL(`tool/${tool.id}`, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 主要页面 - 每天更新
  const mainPages = [
    {
      url: new URL(baseUrl).toString(),
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: new URL('tools', baseUrl).toString(),
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: new URL('categories', baseUrl).toString(),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: new URL('about', baseUrl).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }
  ];

  return [...mainPages, ...toolsUrls];
} 