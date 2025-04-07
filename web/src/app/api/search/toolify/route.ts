import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

interface ToolifySearchResult {
  title: string;
  description: string;
  url: string | undefined;
  category: string;
  visits: number | null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://www.toolify.ai/search/${encodeURIComponent(query)}?r=index`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch from Toolify');
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    
    const results: ToolifySearchResult[] = [];
    
    // 根据 Toolify 实际页面结构更新选择器
    $('div[class*="grid"] > div').each((_, element) => {
      const $el = $(element);
      
      // 查找标题（h3标签）
      const title = $el.find('h3').first().text().trim();
      
      // 查找描述（标题后的第一个p标签）
      const description = $el.find('p').first().text().trim();
      
      // 查找链接（第一个带href的a标签）
      const url = $el.find('a[href]').first().attr('href');
      
      // 查找分类（带有特定类名的span）
      const categories: string[] = [];
      $el.find('span[class*="bg-"]').each((_, span) => {
        const category = $(span).text().trim();
        if (category) categories.push(category);
      });
      
      // 查找访问量（包含数字的文本）
      let visits: number | null = null;
      $el.find('span').each((_, span) => {
        const text = $(span).text().trim();
        const match = text.match(/(\d+(\.\d+)?[KMB]?)/);
        if (match) {
          const numStr = match[0];
          visits = parseVisits(numStr);
        }
      });

      if (title && description) {
        results.push({
          title,
          description,
          url,
          category: categories.join(', '),
          visits
        });
      }
    });

    return NextResponse.json({
      source: 'toolify',
      total: results.length,
      items: results
    });
  } catch (error) {
    console.error('Toolify search error:', error);
    return NextResponse.json({ error: 'Failed to search Toolify' }, { status: 500 });
  }
}

// 辅助函数：解析访问量字符串
function parseVisits(str: string): number | null {
  if (!str) return null;
  
  const num = parseFloat(str.replace(/[KMB]/g, ''));
  if (isNaN(num)) return null;
  
  const multiplier = str.endsWith('K') ? 1000 :
                    str.endsWith('M') ? 1000000 :
                    str.endsWith('B') ? 1000000000 : 1;
                    
  return num * multiplier;
} 