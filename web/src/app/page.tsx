'use client';

import React from 'react'
import PageTransition from '@/components/PageTransition'
import SearchSection from '@/components/SearchSection'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'
import ToolsList from '@/components/ToolsList'

// 使用 dynamic import 导入工具列表组件
const ToolsListComponent = dynamic(() => import('@/components/ToolsList'), {
  ssr: false // 禁用服务端渲染
})

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageTransition>
        <main className="flex-grow">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Discover New AI Innovations
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your gateway to cutting-edge AI tools. Explore our handpicked collection of the newest and most powerful AI solutions.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Curated Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Expertly selected cutting-edge AI tools, from revolutionary image generation to advanced text processing and beyond.
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Always New
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                First access to breakthrough AI technologies. We continuously add new innovations to our collection.
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Expert Insights
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                In-depth analysis of each tool's capabilities, real-world applications, and innovation potential to guide your choices.
              </p>
            </div>
          </div>

          {/* Search Section */}
          <SearchSection />

          {/* Tools List */}
          <ToolsList />
        </main>
      </PageTransition>
      <Footer />
    </div>
  )
} 