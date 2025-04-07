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
                    src={tool.screenshot}
                    alt={`${tool.name} preview`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
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
                  <a
                    href={tool.redirect_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition duration-150 ease-in-out shadow-lg shadow-emerald-600/25"
                  >
                    Visit Tool
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
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