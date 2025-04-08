import React from 'react'
import { Tool } from '@/types'

interface ToolsGridProps {
  tools: Tool[]
}

export default function ToolsGrid({ tools }: ToolsGridProps) {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Latest AI Tools
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Discover the most innovative AI tools and applications
          </p>
        </div>

        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {tools.map((tool) => (
            <div key={tool.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={tool.screenshot || tool.cos_logo_url || '/placeholder.jpg'}
                  alt={tool.name}
                />
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    {tool.category}
                  </p>
                  {tool.redirect_url ? (
                    <a href={tool.redirect_url} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900 dark:text-white">
                        {tool.name}
                      </p>
                      <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                        {tool.description}
                      </p>
                    </a>
                  ) : (
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900 dark:text-white">
                        {tool.name}
                      </p>
                      <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                        {tool.description}
                      </p>
                    </div>
                  )}
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {tool.visits ?? 0} visits
                    </span>
                  </div>
                  <div className="ml-3">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {tool.growth_rate ?? 0}% growth
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 