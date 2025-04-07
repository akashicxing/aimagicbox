'use client'

import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { cascadeSearch, SearchResult } from '@/lib/search';

export default function SearchSection() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    try {
      const results = await cascadeSearch(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto mb-16">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-6 py-4 pl-14 text-lg text-gray-900 dark:text-white placeholder-gray-500 bg-white dark:bg-gray-800 border border-emerald-200 dark:border-emerald-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-lg shadow-emerald-100/20 dark:shadow-emerald-900/20"
            placeholder="Search AI tools..."
          />
          <MagnifyingGlassIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-emerald-500" />
        </div>
      </form>

      {/* Loading State */}
      {isSearching && (
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-emerald-200 border-t-emerald-500"></div>
          <p className="mt-2">Searching...</p>
        </div>
      )}

      {/* Search Results */}
      {searchResults && !isSearching && searchResults.items.length > 0 && (
        <div className="mt-8">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Found {searchResults.total} results
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.items.map((item, index) => (
              <div key={index} className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg shadow-emerald-100/20 dark:shadow-emerald-900/20 hover:shadow-xl hover:shadow-emerald-100/40 dark:hover:shadow-emerald-900/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{item.name}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">{item.description}</p>
                <div className="mt-4 flex items-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results Message with Toolify Link */}
      {searchResults && !isSearching && searchResults.items.length === 0 && (
        <div className="mt-8 p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/50 dark:to-teal-900/50 rounded-2xl shadow-lg shadow-emerald-100/20 dark:shadow-emerald-900/20">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Looking for more AI tools?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                We regularly update our database with the latest AI tools. For a broader search across thousands of tools, you can explore Toolify's extensive database.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/search"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Search
              </a>
              <button
                onClick={() => setQuery('')}
                className="px-6 py-3 border border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 text-sm font-medium rounded-xl transition duration-150 ease-in-out"
              >
                Try different keywords
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 