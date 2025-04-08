'use client';

import { useEffect, useState, useMemo } from 'react';
import ToolsGrid from '@/components/ToolsGrid';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Tool } from '@/types';
import tools from '@/data/tools.json';
import categories from '@/data/categories.json';

interface ToolsListProps {
  selectedCategory?: string | null;
  searchQuery?: string;
}

export default function ToolsList({ selectedCategory = null, searchQuery = '' }: ToolsListProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter tools list
  const filteredTools = useMemo(() => {
    return (tools as Tool[]).filter((tool) => {
      const matchesCategory = !selectedCategory || tool.category === selectedCategory;
      const matchesSearch = !searchQuery || 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ToolsGrid tools={filteredTools} />
    </div>
  );
} 