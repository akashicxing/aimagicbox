import Script from 'next/script';
import Image from 'next/image';
import { Tool } from '@/types';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    applicationCategory: tool.category,
    url: tool.redirect_url,
    image: tool.screenshot,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
        <a href={tool.redirect_url} target="_blank" rel="noopener noreferrer" className="block">
          {tool.screenshot && (
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={tool.screenshot}
                alt={tool.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">{tool.name}</h3>
            <p className="mb-4 text-sm text-gray-600 line-clamp-2">{tool.description}</p>
            <div className="flex items-center justify-between">
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                {tool.category}
              </span>
              <span className="text-sm text-gray-500">
                {tool.saves} saves
              </span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
} 