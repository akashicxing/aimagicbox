'use client';

import { useEffect, useState, useMemo } from 'react';
import ToolsGrid from './ToolsGrid';
import LoadingSpinner from './LoadingSpinner';

export default function ToolsList({
  selectedCategory,
  searchQuery,
}) {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/tools.json')
      .then(res => res.json())
      .then(data => {
        setTools(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading tools:', error);
        setLoading(false);
      });
  }, []);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory =
        selectedCategory === '全部' || tool.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [tools, selectedCategory, searchQuery]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return <ToolsGrid tools={filteredTools} />;
} 