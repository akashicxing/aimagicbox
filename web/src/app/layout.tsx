import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Logo from '@/components/Logo'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Magic Box - AI 工具导航',
  description: '探索精选的人工智能工具，发现改变工作和创作方式的 AI 应用。',
  keywords: 'AI工具, 人工智能, AI应用, 智能工具, AI软件, 机器学习工具, 图像生成, 文本处理, 视频创作, 代码辅助, AI导航',
  authors: [{ name: 'AI Magic Box' }],
  creator: 'AI Magic Box Team',
  publisher: 'AI Magic Box',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://aimagicbox.com',
    siteName: 'AI Magic Box',
    title: 'AI Magic Box - AI 工具导航',
    description: '探索精选的人工智能工具，发现改变工作和创作方式的 AI 应用。',
    images: [
      {
        url: 'https://aimagicbox.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Magic Box - AI 工具导航',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Magic Box - AI 工具导航',
    description: '探索精选的人工智能工具，发现改变工作和创作方式的 AI 应用。',
    images: ['https://aimagicbox.com/twitter-image.jpg'],
    creator: '@aimagicbox',
  },
  alternates: {
    canonical: 'https://aimagicbox.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'baidu-site-verification': 'your-baidu-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50/50 dark:from-emerald-950 dark:via-gray-900 dark:to-teal-950/30`}>
        <Providers>
          {/* Header */}
          <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border-b border-emerald-100 dark:border-emerald-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <Logo />

                {/* Theme Toggle */}
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    className="p-2 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="mt-auto py-8 text-center text-emerald-600/70 dark:text-emerald-400/70">
            <p>© 2024 AI Magic Box. All rights reserved.</p>
          </footer>
        </Providers>
      </body>
    </html>
  )
} 