import tools from '@/data/tools.json';

export interface SearchResult {
  source: 'local';
  total: number;
  items: any[];
}

// 本地搜索
export async function searchLocal(query: string): Promise<SearchResult> {
  const items = tools.filter(tool => 
    tool.name.toLowerCase().includes(query.toLowerCase()) ||
    tool.description.toLowerCase().includes(query.toLowerCase()) ||
    tool.category.toLowerCase().includes(query.toLowerCase())
  );

  return {
    source: 'local',
    items,
    total: items.length
  };
}

// 导出主搜索函数
export const cascadeSearch = searchLocal; 