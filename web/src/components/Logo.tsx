'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <div className="w-10 h-10 relative rounded-lg bg-emerald-50/10 dark:bg-emerald-900/20 backdrop-blur-sm">
        <Image
          className="w-8 h-8 transform group-hover:scale-105 transition-transform duration-200"
          src="/aimagic_logo.jpg"
          alt="AI Magic Box"
          width={32}
          height={32}
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors">
          AI Magic Box
        </span>
        <span className="text-xs text-emerald-600/70 dark:text-emerald-400/70">
          Discover AI Tools
        </span>
      </div>
    </Link>
  );
} 