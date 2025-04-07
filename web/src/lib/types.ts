export interface AITool {
  id: number;
  tool_id: string;
  name: string;
  description: string;
  redirect_url: string;
  visits: string;
  growth_rate: number;
  saves: number;
  is_ad: boolean;
  status: number;
  region: string;
  category: string;
  sort_order: number;
  source_logo_url: string;
  source_preview_url: string;
  source_screenshots: string[];
  cos_logo_url: string;
  cos_preview_url: string;
  cos_screenshots: string[];
  images_synced: boolean;
  created_at: string;
  updated_at: string;
}

export interface ToolTag {
  id: number;
  tool_id: string;
  tag: string;
  created_at: string;
  updated_at: string;
} 