'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <div className="w-10 h-10 relative bg-white rounded-lg p-1">
        <Image
          src="/aimagic_logo.png"
          alt="AI Magic Box Logo"
          width={40}
          height={40}
          className="transform group-hover:scale-105 transition-transform duration-200"
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