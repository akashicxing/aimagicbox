'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import tools from '@/data/tools.json';
import categories from '@/data/categories.json';
import { Tool } from '@/types';

export default function ToolsList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter tools list
  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory = !selectedCategory || tool.category === selectedCategory;
      const matchesSearch = !searchQuery || 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedCategory === null
              ? 'bg-emerald-600 text-white shadow-lg'
              : 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 hover:bg-emerald-200 dark:hover:bg-emerald-800'
          }`}
        >
          All ({tools.length})
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 hover:bg-emerald-200 dark:hover:bg-emerald-800'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg shadow-emerald-100/20 dark:shadow-emerald-900/20 hover:shadow-xl hover:shadow-emerald-100/40 dark:hover:shadow-emerald-900/40 transition-all duration-300"
            >
              {/* Tool preview image */}
              <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                {tool.screenshot && (
                  <img
                    className="w-full h-48 object-cover rounded-lg"
                    src="/placeholder.jpg"
                    alt={tool.name}
                  />
                )}
              </div>

              {/* Tool info */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {tool.name}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                  {tool.visits !== null && (
                    <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                      {tool.visits} visits
                    </div>
                  )}
                </div>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  {tool.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  {tool.redirect_url ? (
                    <a
                      href="/"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    >
                      Visit Tool
                    </a>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400">URL not available</span>
                  )}
                  {tool.saves > 0 && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                      {tool.saves} saves
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No tools found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 