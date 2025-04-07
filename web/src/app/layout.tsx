import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Logo from '@/components/Logo'
import { Providers } from './providers'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://aimagicbox.online'),
  title: 'AI Magic Box - Discover The Best AI Tools',
  description: 'Explore our curated collection of the best AI tools. Find and compare top AI solutions for various tasks including content creation, image generation, and more.',
  keywords: 'AI tools, artificial intelligence, machine learning, ChatGPT, Midjourney, DALL-E, AI applications',
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
    title: 'AI Magic Box - Your Gateway to AI Tools',
    description: 'Discover and compare the best AI tools for your needs. From content creation to image generation, find the perfect AI solution.',
    url: 'https://aimagicbox.online',
    siteName: 'AI Magic Box',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Magic Box - AI Tools Directory',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Magic Box - Discover The Best AI Tools',
    description: 'Find and compare the best AI tools for your needs. Curated collection of top AI solutions.',
    images: ['/og-image.png'],
    creator: '@aimagicbox',
  },
  alternates: {
    canonical: 'https://aimagicbox.com',
  },
  verification: {
    // google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, // 注释掉环境变量方式
    google: '', // 这里直接填入验证码
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
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
        
        {/* Google AdSense - 暂时注释掉
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        */}
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
  );
}