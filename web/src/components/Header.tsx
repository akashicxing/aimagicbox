'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // 检查系统主题偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(document.documentElement.classList.contains('dark') || prefersDark)
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              AI Magic Box
            </Link>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Toggle dark mode"
            >
              {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
} 