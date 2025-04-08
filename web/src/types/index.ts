export interface Tool {
  id: number;
  tool_id: string;
  name: string;
  description: string;
  category: string;
  redirect_url: string;
  visits: number | null;
  growth_rate: number | null;
  saves: number;
  screenshot: string | null;
  cos_logo_url: string | null;
  cos_preview_url: string | null;
  is_ad: number;
  status: number;
  region: string | null;
  sort_order: number;
  source_logo_url: string | null;
  source_preview_url: string | null;
  source_screenshots: string[] | null;
  cos_screenshots: string[] | null;
  images_synced: number;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
} 