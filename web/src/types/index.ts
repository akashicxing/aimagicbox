export interface Tool {
  id: string | number;
  tool_id: string;
  name: string;
  description: string;
  category: string;
  url?: string;
  screenshot: string;
  redirect_url: string;
  visits: number;
  growth_rate: number;
  cos_logo_url: string;
  cos_preview_url: string;
  saves: number;
}

export interface Category {
  name: string;
  description: string;
  id?: string;
  count?: number;
} 