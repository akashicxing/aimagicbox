export interface Tool {
  id: string | number;
  tool_id: string;
  name: string;
  description: string;
  redirect_url: string;
  visits: number | null;
  growth_rate: number | null;
  saves: number;
  category: string;
  cos_logo_url: string | null;
  cos_preview_url: string | null;
  screenshot: string;
  url?: string;
}

export interface Category {
  name: string;
  description: string;
  id?: string;
  count?: number;
} 